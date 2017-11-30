import {ModuleWithProviders, NgModule} from '@angular/core';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MealService} from './services/meals/meal.service';
import {ListItemComponent} from './components/list-item/list-item.component';
import {WorkoutsService} from './services/workouts/workouts.service';
import {JoinPipe} from './pipes/join.pipe';
import {WorkoutPipe} from './pipes/workout.pipe';
import {ScheduleService} from './services/schedule/schedule.service';


@NgModule({
    imports: [
        CommonModule,
        AngularFireDatabaseModule,
        RouterModule
    ],
    declarations: [
        ListItemComponent,
        JoinPipe,
        WorkoutPipe
    ],
    exports: [
        ListItemComponent,
        JoinPipe,
        WorkoutPipe
    ]
})
export class SharedHealthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedHealthModule,
            providers: [
                MealService,
                WorkoutsService,
                ScheduleService
            ]
        }
    }
}
