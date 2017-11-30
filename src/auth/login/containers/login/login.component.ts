import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/auth/auth-service/auth-service';
import {Router} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    public error: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    async login(form: FormGroup) {
        const {email, password} = form.value;
        try {
            await this.authService.login(email, password);
            await this.router.navigate(['/']);
        } catch(err) {
            this.error = err.message;
        }
    }


 }
