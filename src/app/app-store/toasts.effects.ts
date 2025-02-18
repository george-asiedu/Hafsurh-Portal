import {Actions, createEffect, ofType } from '@ngrx/effects';
import { constants } from '../utils/constants';
import { tap } from 'rxjs';
import {inject} from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { authActions } from '../auth/store/auth.actions';

export const signupToastEffects = createEffect(
  (actions$ = inject(Actions), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(authActions.registerAccountSuccess),
      tap((message) =>
        toast.success(
          message.data.message,
          constants.signupSuccess,
          constants.toastDuration
        )
      )
    );
  }, { functional: true, dispatch: false }
);

export const loginToastEffects = createEffect(
  (actions$ = inject(Actions), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(authActions.signinSuccess),
      tap((message) =>
        toast.success(
          message.data.message,
          constants.signinSuccess,
          constants.toastDuration
        )
      )
    );
  }, { functional: true, dispatch: false }
);

export const authFailureToastEffects = createEffect(
  (actions$ = inject(Actions), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(authActions.authenticationFailure),
      tap((error) =>
        toast.danger(
          error.error,
          constants.error,
          constants.toastDuration
        )
      )
    );
  }, { functional: true, dispatch: false }
);

export const authSuccessToastEffects = createEffect(
  (actions$ = inject(Actions), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(authActions.verifyAccountSuccess),
      tap((message) =>
        toast.success(
          message.message.message,
          constants.successMessage,
          constants.toastDuration
        )
      )
    );
  }, { functional: true, dispatch: false }
);
