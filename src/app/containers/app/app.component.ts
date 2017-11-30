import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from 'store';
import {AuthService} from '../../../auth/shared/auth/auth-service/auth-service';
import {Observable} from 'rxjs/Observable';
import {User} from '../../model/user';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div>
            <app-header [user]="$user | async" (logout)="onLogOut()">
                
            </app-header>
            <app-nav *ngIf="($user | async)?.authenticated">
                
            </app-nav>
            <div class="wrapper">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AppComponent implements OnInit, OnDestroy{

    $user: Observable<User>;
    subscription: Subscription;

    constructor(
        private store: Store,
        public authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.subscription = this.authService.auth$.subscribe();
        this.$user = this.store.select<User>('user');
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    async onLogOut() {
        await this.authService.logoutUser();
        await this.router.navigate(['/auth/login']);
    }
}
