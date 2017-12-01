import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScheduleItem} from '../../../../app/model/schedule-item';

@Component({
    selector: 'schedule-section',
    templateUrl: 'schedule-section.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['schedule-section.component.scss']
})

export class ScheduleSectionComponent implements OnInit {

    @Input() name: string;
    @Input() section: ScheduleItem;
    @Output() select = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    onSelect(type: string, assigned: string[] = []) {
        const data = this.section;
        this.select.emit({
            type,
            assigned,
            data
        });
    }
}

