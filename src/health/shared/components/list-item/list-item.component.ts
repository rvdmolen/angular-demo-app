import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'list-item',
    templateUrl: 'list-item.component.html',
    styleUrls: ['list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListItemComponent implements OnInit {

    @Input() item :any;
    @Output() remove = new EventEmitter<any>();
    public toggled = false;

    constructor() {
    }

    ngOnInit() {
    }

    getRoute(item: any) {
        return [`../${item.ingredients ? 'meals' : 'workouts'}`, item.$key];
    }

    deleteItem() {
        this.remove.emit(this.item);
    }

    toggle() {
        this.toggled = !this.toggled;
    }
}
