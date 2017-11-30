export class User {
    email: string;
    uid: string;
    authenticated: boolean;
}

export class UserBuilder {

    private _user: User = new User();

    email(value: string) {
        this._user.email = value;
        return this;
    }

    uid(value: string) {
        this._user.uid = value;
        return this;
    }

    authenticated(value: boolean) {
        this._user.authenticated = value;
        return this;
    }

    build() {
        return this._user;
    }

}
