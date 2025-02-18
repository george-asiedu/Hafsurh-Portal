import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthState} from '../store/auth.state';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {selectIsLoading} from '../store/auth.selectors';
import {VerifyAccount} from '../../model/auth/auth';
import {authActions} from '../store/auth.actions';
import {twoFactorCodeValidator} from '../../validators/twoFactorCodeValidator';

@Component({
  selector: 'app-verify-account',
  standalone: false,
  templateUrl: './verify-account.component.html',
  styleUrl: './verify-account.component.scss'
})
export class VerifyAccountComponent {
  private store = inject(Store<AuthState>);
  public verifyAccountForm: FormGroup;
  public isLoading = this.store.selectSignal(selectIsLoading);

  public constructor(private fb: FormBuilder) {
    this.verifyAccountForm = this.fb.group({
      code: ['', [Validators.required, twoFactorCodeValidator()]]
    });
  }

  public onVerifyAccount() {
    if(this.verifyAccountForm.invalid) return;

    const code: VerifyAccount = this.verifyAccountForm.value;
    this.store.dispatch(authActions.verifyAccount({code}));
  }

  public getControl(value: string) {
    return this.verifyAccountForm.get(value);
  }
}
