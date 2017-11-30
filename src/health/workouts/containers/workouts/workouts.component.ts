import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Store} from 'store';
import {Workout} from '../../../../app/model/workout';
import {WorkoutsService} from '../../../shared/services/workouts/workouts.service';

@Component({
    selector: 'workouts',
    templateUrl: 'workouts.component.html',
    styleUrls: ['workouts.component.scss']
})

export class WorkoutsComponent implements OnInit, OnDestroy {

    workouts$: Observable<Workout[]>;
    subscription: Subscription;

    constructor(
        private workoutsService: WorkoutsService,
        private store: Store
    ) {
    }

    ngOnInit() {
        this.workouts$ = this.store.select<Workout[]>('workouts');
        this.subscription = this.workoutsService.workouts$.subscribe();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onRemove(workout: Workout) {
        this.workoutsService.removeWorkout(workout.$key);
    }
}
