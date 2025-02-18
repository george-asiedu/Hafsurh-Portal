import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthState} from '../store/auth.state';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {selectIsLoading} from '../store/auth.selectors';
import {emailValidator} from '../../validators/emailValidator';
import {passwordValidator} from '../../validators/passwordValidator';
import {Signin} from '../../model/auth/auth';
import {authActions} from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  private store = inject(Store<AuthState>);
  public signinForm: FormGroup;
  public showPassword = false;
  public isLoading = this.store.selectSignal(selectIsLoading);

  public constructor(private fb: FormBuilder) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]]
    });
  }

  public onSignin() {
    if(this.signinForm.invalid) return;

    const user: Signin = this.signinForm.value;
    this.store.dispatch(authActions.signin({user}));
  }

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  public getControl(value: string) {
    return this.signinForm.get(value);
  }
}
