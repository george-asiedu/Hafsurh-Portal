import {Component, inject} from '@angular/core';
import { authActions } from '../store/auth.actions';
import {Register} from '../../model/auth/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { nameValidator } from '../../validators/nameValidator';
import { emailValidator } from '../../validators/emailValidator';
import { passwordValidator } from '../../validators/passwordValidator';
import { selectIsLoading } from '../store/auth.selectors';
import { AuthState } from '../store/auth.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private store = inject(Store<AuthState>);
  public registerForm: FormGroup;
  public showPassword = false;
  public isLoading = this.store.selectSignal(selectIsLoading);

  public constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, nameValidator()]],
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]]
    });
  }

  public onRegister() {
    if(this.registerForm.invalid) return;

    const user: Register = this.registerForm.value;
    this.store.dispatch(authActions.registerAccount({user}));
  }

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  public getControl(value: string) {
    return this.registerForm.get(value);
  }
}
