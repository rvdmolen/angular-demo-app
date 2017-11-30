import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {WorkoutsService} from '../../../shared/services/workouts/workouts.service';
import {Workout} from '../../../../app/model/workout';

@Component({
    selector: 'workout',
    templateUrl: 'workout.component.html',
    styleUrls: ['workout.component.scss']
})

export class WorkoutComponent implements OnInit, OnDestroy {
    workout$: Observable<Workout>;
    subscription: Subscription;

    constructor(
        private workoutService: WorkoutsService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.workoutService.workouts$.subscribe();
        this.workout$ = this.route.params
            .switchMap(param => {
                return this.workoutService.getWorkout(param.id);
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    async addWorkout(workout: Workout) {
        await this.workoutService.addWorkout(workout);
        this.backToWorkouts();
    }

    async updateWorkout(workout: Workout) {
        const key = this.route.snapshot.params.id;
        await this.workoutService.updateWorkout(key, workout);
        this.backToWorkouts();
    }

    async removeWorkout(workout: Workout) {
        const key = this.route.snapshot.params.id;
        await this.workoutService.removeWorkout(key);
        this.backToWorkouts();
    }

    backToWorkouts() {
        this.router.navigate(['workouts'])
    }
}
