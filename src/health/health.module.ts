import {NgModule} from '@angular/core';
import {HealthRoutingModule} from './health.routing';
import {SharedHealthModule} from './shared/shared.module';

@NgModule({
    imports: [
        HealthRoutingModule,
        SharedHealthModule.forRoot()
    ],
    exports: [],
    declarations: [],
    providers: [],
})

export class HealthModule {
}
