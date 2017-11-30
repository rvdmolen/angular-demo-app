import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'schedule-controls',
    templateUrl: 'schedule-controls.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['schedule-controls.component.scss']
})

export class ScheduleControlsComponent implements OnInit {

    @Input() selected: Date;
    @Output() move: EventEmitter<number> = new EventEmitter<number>();

    public offset = 0;

    constructor() {
    }

    ngOnInit() {
    }

    moveDate(value: number) {
        this.offset = value;
        this.move.emit(value);
    }
}

