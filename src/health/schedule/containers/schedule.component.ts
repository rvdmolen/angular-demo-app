import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ScheduleService} from '../../shared/services/schedule/schedule.service';
import {Subscription} from 'rxjs/Subscription';
import {Store} from 'store';
import {ScheduleItem} from '../../../app/model/schedule-item';

@Component({
    selector: 'schedule',
    templateUrl: 'schedule.component.html',
    styleUrls: ['schedule.component.scss']
})

export class ScheduleComponent implements OnInit, OnDestroy {

    date$: Observable<Date>;
    subscriptions: Subscription[] = [];
    schedule$: Observable<ScheduleItem[]>;


    constructor(
        private store: Store,
        private scheduleService: ScheduleService) {
    }

    ngOnInit() {
        this.date$ = this.store.select('date');
        this.schedule$ = this.store.select('schedule');
        this.subscriptions = [
            this.scheduleService.schedule$.subscribe()
        ];
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    onChangeDate(date: Date) {
        this.scheduleService.updateDate(date);
    }


}
