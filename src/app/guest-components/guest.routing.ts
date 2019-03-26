import { Routes } from '@angular/router';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { GuestAboutComponent } from './guest-about/guest-about.component';

export const GuestRoutes: Routes = [
    {
        path: '',
        children: [
        {
            path: '',
            component: GuestHomeComponent,
        }, {
            path: 'about-guest',
            component: GuestAboutComponent,
            pathMatch: 'full'
        },
        ]
    }
];