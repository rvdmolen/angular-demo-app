import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'schedule-days',
    templateUrl: 'schedule-days.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['schedule-days.component.scss']
})

export class ScheduleDaysComponent implements OnInit {

    days = ['M','T','W','T','V','S','S'];
    @Input() selected: number;
    @Output() select = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    selectDay(index: number) {
        this.select.emit(index);
    }
}

