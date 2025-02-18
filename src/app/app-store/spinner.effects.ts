import { inject } from '@angular/core';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs';
import {authActions} from '../auth/store/auth.actions';

export const showSpinnerEffects = createEffect(
  (actions$ = inject(Actions), spinner = inject(NgxSpinnerService)) => {
    return actions$.pipe(
      ofType(
        authActions.registerAccount,
        authActions.signin,
        authActions.verifyAccount
      ),
      tap(() => spinner.show())
    );
  },
  { functional: true, dispatch: false }
);

export const hideSpinnerEffects = createEffect(
  (actions$ = inject(Actions), spinner = inject(NgxSpinnerService)) => {
    return actions$.pipe(
      ofType(
        authActions.registerAccountSuccess,
        authActions.signinSuccess,
        authActions.authenticationFailure,
        authActions.verifyAccountSuccess,
      ),
      tap(() => spinner.hide())
    );
  },
  { functional: true, dispatch: false }
);
