import {NgModule} from '@angular/core';
import {WorkoutsComponent} from './containers/workouts/workouts.component';
import {RouterModule, Routes} from '@angular/router';
import {WorkoutComponent} from './containers/workout/workout.component';


export const workoutRoutes: Routes = [
    {
        path: '',
        component: WorkoutsComponent
    },
    {
        path: 'new',
        component: WorkoutComponent
    },
    {
        path: ':id',
        component: WorkoutComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(workoutRoutes)
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class WorkoutsRoutingModule {
}
