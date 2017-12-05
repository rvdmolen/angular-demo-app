import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ScheduleItem} from '../../../../app/model/schedule-item';
import {ScheduleList} from '../../../../app/model/schedule-list';

@Component({
    selector: 'schedule-calendar',
    templateUrl: 'schedule-calendar.component.html',
    styleUrls: ['schedule-calendar.component.scss']
})

export class ScheduleCalendarComponent implements OnInit, OnChanges {

    @Input() set date(date: Date) {
        this.selectedDay = new Date(date.getTime());
    };

    @Input() items: ScheduleList;

    selectedDay: Date;
    selectedDayIndex: number;
    selectedWeek: Date;

    sections = [
        {key: 'morning', name: 'Morning'},
        {key: 'lunch', name: 'Lunch'},
        {key: 'evening', name: 'Evening'},
        {key: 'snacks', name: 'Snacks and Drinks'}
    ];

    @Output() change = new EventEmitter<Date>();
    @Output() select = new EventEmitter<any>();

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
        this.selectedDayIndex = this.getToDay(this.selectedDay);
        this.selectedWeek = this.getStartOfWeek(new Date(this.selectedDay));
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

    getSection(name: string): ScheduleItem {
        return this.items && this.items[name] || {};
    }

    selectSection({type, assigned, data}: any, section: string) {
        const day = this.selectedDay;
        this.select.emit({
            type,
            assigned,
            data,
            section,
            day
        });
    }

}

