import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoginComponent} from './containers/login/login.component';

const LoginRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LoginRoutes)
    ]
})
export class LoginRoutingModule {
}


