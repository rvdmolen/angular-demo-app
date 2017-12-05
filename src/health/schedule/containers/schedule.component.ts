import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ScheduleService} from '../../shared/services/schedule/schedule.service';
import {Subscription} from 'rxjs/Subscription';
import {Store} from 'store';
import {ScheduleItem} from '../../../app/model/schedule-item';
import {Workout} from '../../../app/model/workout';
import {Meal} from '../../../app/model/meal';
import {MealService} from '../../shared/services/meals/meal.service';
import {WorkoutsService} from '../../shared/services/workouts/workouts.service';

@Component({
    selector: 'schedule',
    templateUrl: 'schedule.component.html',
    styleUrls: ['schedule.component.scss']
})

export class ScheduleComponent implements OnInit, OnDestroy {

    date$: Observable<Date>;
    selected$: Observable<any>;
    subscriptions: Subscription[] = [];
    schedule$: Observable<ScheduleItem[]>;
    list$: Observable<Meal[] | Workout[]>;
    open = false;

    constructor(
        private store: Store,
        private scheduleService: ScheduleService,
        private mealService: MealService,
        private workoutService: WorkoutsService) {
    }

    ngOnInit() {
        this.date$ = this.store.select('date');
        this.schedule$ = this.store.select('schedule');
        this.selected$ = this.store.select('selected');
        this.list$ = this.store.select('list');

        this.subscriptions = [
            this.scheduleService.schedule$.subscribe(),
            this.scheduleService.selected$.subscribe(),
            this.scheduleService.list$.subscribe(),
            this.scheduleService.items$.subscribe(),
            this.mealService.meals$.subscribe(),
            this.workoutService.workouts$.subscribe(),
        ];
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    onChangeDate(date: Date) {
        this.scheduleService.updateDate(date);
    }

    changeSection(value: any) {
        this.open = true;
        this.scheduleService.selectSection(value);
    }

    assignItem(items: string[]) {
        this.scheduleService.updateItems(items);
        this.closeAssign();

    }

    closeAssign() {
        this.open = false;
    }


}
