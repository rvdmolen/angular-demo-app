import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/shared/guards/auth.guard';

export const healtRoutes: Routes = [
    {
        path: 'meals',
        loadChildren: './meals/meals.module#MealsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'workouts',
        loadChildren: './workouts/workouts.module#WorkoutsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'schedule',
        loadChildren: './schedule/schedule.module#ScheduleModule',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(healtRoutes)
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class HealthRoutingModule {
}
