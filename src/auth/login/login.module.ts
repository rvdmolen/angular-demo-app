import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login.routing';
import {LoginComponent} from './containers/login/login.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [],
    providers: [],
})
export class LoginModule {
}
