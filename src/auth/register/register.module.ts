import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterRoutingModule} from './register.routing';
import {RegisterComponent} from './components/register/register.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        RegisterComponent
    ],
    exports: [],
    providers: [],
})
export class RegisterModule {
}
