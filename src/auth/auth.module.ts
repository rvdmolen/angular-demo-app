import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthRoutes} from './auth.routes';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {SharedModule} from './shared/shared.module';
import {firebaseConfig} from './firebase.config';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AuthRoutes),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class AuthModule {
}
