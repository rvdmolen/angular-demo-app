import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Store} from 'store';
import 'rxjs/add/operator/do';
import {User, UserBuilder} from '../../../../app/model/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

    auth$: Observable<any>;

    constructor(
        private af: AngularFireAuth,
        private store: Store) {

        this.auth$ = this.af.authState
            .do(next => {
                if (!next) {
                    store.set('user', null);
                    return;
                }

                const user: User = new UserBuilder()
                    .email(next.email)
                    .uid(next.uid)
                    .authenticated(true)
                    .build();

                store.set('user', user);
            })
    }

    get user() {
        return this.af.auth.currentUser;
    }

    get authState() {
        return this.af.authState;
    }

    createUser(email : string, password: string) {
       return this.af.auth
           .createUserWithEmailAndPassword(email, password);
    }

    login(email: string, password: string) {
        return this.af.auth
            .signInWithEmailAndPassword(email, password);
    }

    logoutUser() {
        return this.af.auth
            .signOut();
    }
}
