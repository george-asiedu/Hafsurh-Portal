import {createActionGroup, emptyProps, props } from "@ngrx/store";
import {
  Register,
  RegisterResponse,
  Signin,
  SigninResponse,
  SuccessResponse,
  VerifyAccount
} from '../../model/auth/auth';
import {HttpErrorResponse} from '@angular/common/http';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Register Account': props<{ user: Register }>(),
    'Signin': props<{ user: Signin }>(),
    'Verify Account': props<{ code: VerifyAccount }>(),
    'Register Account Success': props<{ data: RegisterResponse }>(),
    'Signin Success': props<{ data: SigninResponse }>(),
    'Verify Account Success': props<{ message: SuccessResponse }>(),
    'RefreshToken Success': props<{ data: SigninResponse }>(),
    'Authentication Failure': props<{ error: HttpErrorResponse }>(),
    'Logout': emptyProps()
  }
});
