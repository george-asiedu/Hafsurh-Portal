import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../service/auth.service';
import { authActions } from './auth.actions';
import {mapResponse} from '@ngrx/operators';
import {filter, switchMap, withLatestFrom} from 'rxjs';
import {Store} from '@ngrx/store';
import {AuthState} from './auth.state';
import {selectRegisterToken} from './auth.selectors';

export const registerAccountEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.registerAccount),
      switchMap(({user}) =>
        authService.register(user).pipe(
          mapResponse({
            next: (response) => authActions.registerAccountSuccess({data: response}),
            error: (error: string) => authActions.authenticationFailure({error})
          })
        )
      )
    );
  }, { functional: true, dispatch: true }
);

export const signinEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.signin),
      switchMap(({user}) =>
        authService.signin(user).pipe(
          mapResponse({
            next: (response) => authActions.signinSuccess({data: response}),
            error: (error: string) => authActions.authenticationFailure({error})
          })
        )
      )
    );
  }, { functional: true, dispatch: true }
);

export const verifyAccountEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    store = inject(Store<AuthState>)
  ) => {
    return actions$.pipe(
      ofType(authActions.verifyAccount),
      withLatestFrom(store.select(selectRegisterToken)),
      filter(([, token]) => !!token),
      switchMap(([{code}, token]) =>
        authService.verifyAccount(code, token as string).pipe(
          mapResponse({
            next: (response) => authActions.verifyAccountSuccess({message: response}),
            error: (error: string) => authActions.authenticationFailure({error})
          })
        )
      )
    );
  }, { functional: true, dispatch: true }
);
