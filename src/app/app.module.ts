import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GuestLayoutComponent } from './guest-components/guest-layout/guest-layout.component';
import { AppRoutes } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { AuthLayoutComponent } from './auth-components/auth-layout/auth-layout.component';
import { AuthService } from './guards/auth.service';
import { ErrComponent } from './err/err.component';
import { GuestGuard } from './guards/guest.guard';

@NgModule({
  declarations: [
    AppComponent,
    GuestLayoutComponent,
    AuthLayoutComponent,
    ErrComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [AuthService, AuthGuard, GuestGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
