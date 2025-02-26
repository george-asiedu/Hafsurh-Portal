import {Actions, createEffect, ofType } from '@ngrx/effects';
import { constants } from '../utils/constants';
import { tap } from 'rxjs';
import {inject} from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { authActions } from '../auth/store/auth.actions';
import {adminActions} from '../admin/store/admin.actions';

export const registerToastEffects = createEffect(
  (actions$ = inject(Actions), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(authActions.registerAccountSuccess),
      tap((message) =>
        toast.success(
          constants.signupSuccess,
          message.data.message,
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
          constants.signinSuccess,
          message.data.message,
          constants.toastDuration
        )
      )
    );
  }, { functional: true, dispatch: false }
);

export const appFailureToastEffects = createEffect(
  (actions$ = inject(Actions), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(
        authActions.authenticationFailure,
        adminActions.userFailure,
        adminActions.courseFailure
      ),
      tap((error) =>
        toast.danger(
          constants.error,
          error.error.message,
          constants.toastDuration
        )
      )
    );
  }, { functional: true, dispatch: false }
);

export const appSuccessToastEffects = createEffect(
  (actions$ = inject(Actions), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(
        authActions.verifyAccountSuccess,
        adminActions.deleteCourseSuccess
      ),
      tap((message) =>
        toast.success(
          constants.successMessage,
          message.message.message,
          constants.toastDuration
        )
      )
    );
  }, { functional: true, dispatch: false }
);

export const courseSuccessToastEffects = createEffect(
  (actions$ = inject(Actions), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(
        adminActions.courseSuccess,
        adminActions.updateCourseSuccess,
        adminActions.getAllCoursesSuccess
      ),
      tap((response) =>
        toast.success(
          constants.successMessage,
          response.data.message,
          constants.toastDuration
        )
      )
    );
  }, { functional: true, dispatch: false }
);

export const usersSuccessToastEffects = createEffect(
  (actions$ = inject(Actions), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(
        adminActions.getUserProfileSuccess,
        adminActions.getAllUsersSuccess,
      ),
      tap((response) =>
        toast.success(
          constants.successMessage,
          response.user.message,
          constants.toastDuration
        )
      )
    );
  }, { functional: true, dispatch: false }
);
