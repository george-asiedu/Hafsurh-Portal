import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {RegisterComponent} from './register/register.component';
import {VerifyAccountComponent} from './verify-account/verify-account.component';

const routes: Routes = [
  { path: '', component: SigninComponent, title: 'Hafsurh\'s Portal | Login' },
  { path: 'register', component: RegisterComponent, title: 'Hafsurh\'s Portal | Register Account' },
  { path: 'verify-account', component: VerifyAccountComponent, title: 'Hafsurh\'s Portal | Verify Account' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
