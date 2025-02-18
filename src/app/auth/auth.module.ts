import { NgModule } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { RegisterComponent } from './register/register.component';
import {RouterLink} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [
    SigninComponent,
    VerifyAccountComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    NgIf,
    NgxSpinnerModule
  ]
})
export class AuthModule { }
