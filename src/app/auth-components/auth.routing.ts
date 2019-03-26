import { Routes } from '@angular/router';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { AuthAboutComponent } from './auth-about/auth-about.component';

export const AuthRoutes: Routes = [
    {
        path: '',
        children: [
        {
            path: '',
            component: AuthHomeComponent,
        }, {
            path: 'about',
            component: AuthAboutComponent,
            pathMatch: 'full'
        },
        ]
    }
];
