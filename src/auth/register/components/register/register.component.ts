import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/auth/auth-service/auth-service';
import {Router} from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {

    public error: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
    }

    async register(form: FormGroup) {
        const {email, password} = form.value;
        try {
            await this.authService.createUser(email, password);
            await this.router.navigate(['/']);
        } catch (err) {
            this.error = err.message;
        }
    }
}
