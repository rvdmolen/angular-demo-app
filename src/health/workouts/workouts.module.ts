import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkoutsRoutingModule} from './workouts.routing';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {WorkoutsComponent} from './containers/workouts/workouts.component';
import {WorkoutComponent} from './containers/workout/workout.component';
import {WorkoutFormComponent} from './components/workout-form.component';
import {SharedHealthModule} from '../shared/shared.module';
import {WorkoutTypeComponent} from './components/workout-type.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        WorkoutsRoutingModule,
        ReactiveFormsModule,
        SharedHealthModule
    ],
    declarations: [
        WorkoutsComponent,
        WorkoutComponent,
        WorkoutFormComponent,
        WorkoutTypeComponent
    ]
})
export class WorkoutsModule {
}

