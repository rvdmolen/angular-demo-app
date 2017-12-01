import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Store} from 'store';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {AuthService} from '../../../../auth/shared/auth/auth-service/auth-service';
import {ScheduleList} from '../../../../app/model/schedule-list';
import {ScheduleItem} from '../../../../app/model/schedule-item';

@Injectable()
export class ScheduleService {

    private date$: BehaviorSubject<Date> = new BehaviorSubject(new Date());

    schedule$: Observable<ScheduleItem[]> = this.date$
        .do((next: any) => this.store.set('date', next))
        .map((day: any) => {

            const startAt = (
                new Date(day.getFullYear(), day.getMonth(), day.getDate())
            ).getTime();

            const endAt = (
                new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1)
            ).getTime() -1;
            return [];
            //return { startAt, endAt };

        })
        // .switchMap(({ startAt, endAt }: any) => this.getSchedule(startAt, endAt))
        // .map((data: any) => {
        //
        //     const mapped: ScheduleList = {};
        //
        //     for (const prop of data) {
        //         if (!mapped[prop.section]) {
        //             mapped[prop.section] = prop;
        //         }
        //     }
        //
        //     return mapped;
        //
        // })
        // .do((next: any) => this.store.set('schedule', next));

    // public schedule$: Observable<ScheduleItem[]> = this.date$
    //     .do((next: any) => this.store.set('date', next))
    //     .map((day: any) => {
    //         const startAt = (
    //             new Date(day.getFullYear(), day.getMonth(), day.getDate())
    //         ).getTime();
    //
    //         const endAt = (
    //             new Date(day.getFullYear(), day.getMonth(), day.getDate()+1)
    //         ).getTime()-1;
    //
    //         return {startAt, endAt};
    //     })
    //     .switchMap(({startAt, endAt}: any) => {
    //         return this.getSchedule(startAt, endAt)
    //     })
    //     .map((data: any) => {
    //         const mapped: ScheduleList = {};
    //         for (const prop of data) {
    //             if (!mapped[prop.section]) {
    //                 mapped[prop.section] = prop;
    //             }
    //         }
    //         return mapped;
    //     })
    //     .do((next: any) => {
    //         this.store.set('schedule', next);
    //     });

    constructor(
        private store: Store,
        private db: AngularFireDatabase,
        private authService: AuthService
    ) {
    }

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
}
