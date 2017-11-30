import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScheduleComponent} from './containers/schedule.component';

export const scheduleRoutes: Routes = [
    {
        path: '',
        component: ScheduleComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(scheduleRoutes)
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class ScheduleRoutingModule {
}
