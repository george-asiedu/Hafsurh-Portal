import { inject } from '@angular/core';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs';
import {authActions} from '../auth/store/auth.actions';
import {adminActions} from '../admin/store/admin.actions';

export const showSpinnerEffects = createEffect(
  (actions$ = inject(Actions), spinner = inject(NgxSpinnerService)) => {
    return actions$.pipe(
      ofType(
        authActions.registerAccount, authActions.signin,
        authActions.verifyAccount, adminActions.updateUserBio,
        adminActions.getUserProfile, adminActions.getAllUsers,
        adminActions.addCourse, adminActions.deleteCourse,
        adminActions.registerCourse, adminActions.updateCourse
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
        authActions.registerAccountSuccess, authActions.signinSuccess,
        authActions.authenticationFailure, authActions.verifyAccountSuccess,
        adminActions.getUserProfileSuccess, adminActions.getAllUsersSuccess,
        adminActions.updateUserBioSuccess, adminActions.updateCourseSuccess,
        adminActions.deleteCourseSuccess, adminActions.getAllCoursesSuccess,
        adminActions.courseRegistrationSuccess, adminActions.updateCourseSuccess,
        adminActions.userFailure, adminActions.courseFailure
      ),
      tap(() => spinner.hide())
    );
  },
  { functional: true, dispatch: false }
);
