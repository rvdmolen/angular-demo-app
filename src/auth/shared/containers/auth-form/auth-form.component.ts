import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss']
})

export class AuthFormComponent implements OnInit {
    form: FormGroup;

    @Output() submitted = new EventEmitter<FormGroup>();

    constructor(private fb: FormBuilder) {
        this._createForm();
    }

    private _createForm() {
        this.form = this.fb.group({
            'email': ['', Validators.email],
            'password': ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        if (this.form.valid) {
            this.submitted.emit(this.form);
        }
    }

    get passwordInvalid() {
        const control = this.form.get('password');
        return control.hasError('required') && control.touched;
    }

    get emailInvalid() {
        const control = this.form.get('email');
        return control.hasError('email') && control.touched;
    }
}
