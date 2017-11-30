import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RegisterComponent} from './components/register/register.component';


const RegisterRoutes: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(RegisterRoutes)
    ]
})
export class RegisterRoutingModule {
}
