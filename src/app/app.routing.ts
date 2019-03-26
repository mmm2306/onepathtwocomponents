import { Routes } from '@angular/router';
import { GuestLayoutComponent } from './guest-components/guest-layout/guest-layout.component';
import { AuthLayoutComponent } from './auth-components/auth-layout/auth-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrComponent } from './err/err.component';
import { GuestGuard } from './guards/guest.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        component: GuestLayoutComponent,
        canActivate: [GuestGuard],
        children: [
            {
                path: '',
                loadChildren: './guest-components/guest.module#GuestModule',
            }
        ],
    },
    {
        path: '',
        component: AuthLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: './auth-components/auth.module#AuthModule',
            }
        ],
    },
    {
        path: '**',
        component: ErrComponent,
    },
];