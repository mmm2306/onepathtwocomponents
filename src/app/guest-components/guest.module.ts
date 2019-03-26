import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { GuestAboutComponent } from './guest-about/guest-about.component';
import { RouterModule } from '@angular/router';
import { GuestRoutes } from './guest.routing';
import { AuthService } from '../guards/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GuestRoutes),
  ],
  declarations: [GuestHomeComponent, GuestAboutComponent],
  providers: [AuthService],
})
export class GuestModule { }
