import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../model/user';

@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {

    @Input() user: User;

    @Output() logout = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    logOutUser() {
        this.logout.emit();
    }
}
