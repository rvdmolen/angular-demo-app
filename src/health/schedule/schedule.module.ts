import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ScheduleRoutingModule} from './schedule.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {ScheduleComponent} from './containers/schedule.component';
import {ScheduleCalendarComponent} from './components/schedule-calendar/schedule-calendar.component';
import {ScheduleAssignComponent} from './components/schedule-assign/schedule-assign.component';
import {ScheduleControlsComponent} from './components/schedule-controls/schedule-controls.component';
import {ScheduleDaysComponent} from './components/schedule-days/schedule-days.component';
import {ScheduleSectionComponent} from './components/schedule-section/schedule-section.component';


@NgModule({
    imports: [
        CommonModule,
        ScheduleRoutingModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations: [
        ScheduleComponent,
        ScheduleCalendarComponent,
        ScheduleAssignComponent,
        ScheduleControlsComponent,
        ScheduleDaysComponent,
        ScheduleSectionComponent
    ]
})
export class ScheduleModule {
}
