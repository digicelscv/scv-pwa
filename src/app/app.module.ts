import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { AppRoutingModule } from './app-routing.module';
import { BecomeAnAgentComponent } from './become-an-agent/become-an-agent.component';
import { ConfirmYourEmailComponent } from './confirm-your-email/confirm-your-email.component';
import { PendingApprovalComponent } from './pending-approval/pending-approval.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CheckYourEmailComponent } from './check-your-email/check-your-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    BecomeAnAgentComponent,
    ConfirmYourEmailComponent,
    PendingApprovalComponent,
    SignInComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    CheckYourEmailComponent,
    ResetPasswordComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
