import {Routes} from '@angular/router';

export const AuthRoutes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                loadChildren: './login/login.module#LoginModule'
            },
            {
                path: 'register',
                loadChildren: './register/register.module#RegisterModule'
            }
        ]
    }
];
