import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
    selector: 'schedule-calendar',
    templateUrl: 'schedule-calendar.component.html',
    styleUrls: ['schedule-calendar.component.scss']
})

export class ScheduleCalendarComponent implements OnInit, OnChanges {

    @Input() set date(date: Date) {
        this.selectedDay = new Date(date.getTime());
    };
    selectedDay: Date;
    selectedDayIndex: number;
    selectedWeek: Date;

    @Output() change = new EventEmitter<Date>();

    constructor() {
    }

    ngOnInit() {
    }

    onMove(weekOffset: number) {
        const startOfWeek = this.getStartOfWeek(new Date());
        const startDate = (
            new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate())
        );
        startDate.setDate(startDate.getDate() + (weekOffset * 7));
        this.change.emit(startDate);
    }

    private getStartOfWeek(date: Date): Date {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6: 1);
        return new Date(date.setDate(diff));

    }

    ngOnChanges() {
        this.selectedWeek = this.getStartOfWeek(new Date());
        this.selectedDayIndex = this.getToDay(this.selectedDay);
    }

    private getToDay(date: Date) {
        let today = date.getDay() - 1;
        if (today < 0) {
            today = 6;
        }
        return today;
    }

    onSelect(index: number) {
        const selectedDay = new Date(this.selectedWeek);
        selectedDay.setDate(selectedDay.getDate() + index);
        this.change.emit(selectedDay);
    }

}
