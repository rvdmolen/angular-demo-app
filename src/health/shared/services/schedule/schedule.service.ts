import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from 'store';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import {ScheduleItem} from '../../../../app/model/schedule-item';
import {ScheduleList} from '../../../../app/model/schedule-list';
import {AuthService} from '../../../../auth/shared/auth/auth-service/auth-service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ScheduleService {

    private date$ = new BehaviorSubject(new Date());
    private section$ = new Subject();
    private itemList$ = new Subject();

    items$ = this.itemList$
        .withLatestFrom(this.section$)
        .map(([items, section] : any) => {
            const id = section.data.$key;
            const defaults: ScheduleItem = {
                workouts: null,
                meals: null,
                section: section.section,
                timestamp: new Date(section.day).getTime()
            };
            const payload = {
                ...(id ? section.data : defaults),
                ...items
            }

            if (id) {
                return this.updateSection(id, payload);
            } else {
                return this.createSection(payload)
            }
        })

    list$ = this.section$
        .map((value: any) => this.store.value[value.type])
        .do((next: any) => this.store.set('list', next));

    selected$ = this.section$
        .do((next: any) => this.store.set('selected', next));

    schedule$: Observable<ScheduleItem[]> = this.date$
        .do((next: any) => this.store.set('date', next))
        .map((day: any) => {

            const startAt = (
                new Date(day.getFullYear(), day.getMonth(), day.getDate())
            ).getTime();

            const endAt = (
                new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1)
            ).getTime() -1;

            return { startAt, endAt };

        })
        .switchMap(({ startAt, endAt }: any) => this.getSchedule(startAt, endAt))
        .map((data: any) => {

            const mapped: ScheduleList = {};

            for (const prop of data) {
                if (!mapped[prop.section]) {
                    mapped[prop.section] = prop;
                }
            }

            return mapped;

        })
        .do((next: any) => this.store.set('schedule', next));

    constructor(
        private store: Store,
        private authService: AuthService,
        private db: AngularFireDatabase
    ) {}

    get uid() {
        return this.authService.user.uid;
    }


    updateDate(date: Date) {
        this.date$.next(date);
    }


    private getSchedule(startAt: number, endAt: number) {
        return this.db.list(`schedule/${this.uid}`, {
            query: {
                orderByChild: 'timestamp',
                startAt,
                endAt
            }
        });
    }

    selectSection(event: any) {
        this.section$.next(event);
    }

    updateItems(items: string[]) {
        this.itemList$.next(items);
    }

    updateSection(key: string, payload: ScheduleItem) {
        return this.db.object(`schedule/${this.uid}/${key}`).update(payload);
    }

    createSection(payload: ScheduleItem) {
        return this.db.list(`schedule/${this.uid}`).push(payload);
    }

}
