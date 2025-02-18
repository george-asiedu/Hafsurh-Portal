import { inject } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {tap} from 'rxjs';
import { authActions } from '../auth/store/auth.actions';

export const registerAccountRouteEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registerAccountSuccess),
      tap(() => route.navigateByUrl('/verify-account'))
    );
  },
  { functional: true, dispatch: false }
);

export const verifyAccountRouteEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.verifyAccountSuccess),
      tap(() => route.navigateByUrl(''))
    );
  },
  { functional: true, dispatch: false }
);

export const signinRouteEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.signinSuccess),
      tap(() => route.navigateByUrl('/dashboard'))
    );
  },
  { functional: true, dispatch: false }
);

export const logoutRouteEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.logout),
      tap(() => route.navigateByUrl(''))
    );
  },
  { functional: true, dispatch: false }
);
