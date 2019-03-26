import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { AuthAboutComponent } from './auth-about/auth-about.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routing';
import { AuthService } from '../guards/auth.service';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
  ],
  declarations: [AuthHomeComponent, AuthAboutComponent],
  providers: [AuthService, AuthGuard],
})
export class AuthModule { }
