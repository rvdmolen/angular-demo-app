import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Meal} from '../../../../app/model/meal';
import {Workout} from '../../../../app/model/workout';

@Component({
    selector: 'schedule-assign',
    templateUrl: 'schedule-assign.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['schedule-assign.component.scss']
})

export class ScheduleAssignComponent implements OnInit {

    @Input() section: any;
    @Input() list: Meal[] | Workout[];
    @Output() update = new EventEmitter<any>();
    @Output() cancel = new EventEmitter<any>();

    selected: string[] = [];

    constructor() {
    }

    ngOnInit() {
        this.selected = [...this.section.assigned];
    }

    getRoute(name: string) {
       return [`../${name}/new`];
    }

    exists(name: string) {
       return !!~this.selected.indexOf(name);
    }

    updateAssign() {
        this.update.emit({
            [this.section.type]: this.selected
        });
    }

    cancelAssign() {
        this.cancel.emit();
    }



    toggleItem(name: string) {
        if (this.exists(name)) {
            this.selected = this.selected.filter(item => item !== name);
        } else {
            this.selected = [...this.selected, name];
        }
    }
}

