import {HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, tap, throwError } from 'rxjs';
import { AuthService } from '../../auth/service/auth.service';
import { authActions } from '../../auth/store/auth.actions';

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const store = inject(Store);
  const isRefreshing = signal<boolean>(false);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !isRefreshing()) {
        return authService.refreshToken().pipe(
          tap(() => isRefreshing.set(true)),
          exhaustMap((response) => {
            store.dispatch(authActions.refreshTokenSuccess({ data: response }));
            isRefreshing.set(false);
            const newAccessToken = response.data.accessToken;
            const newRequest = req.clone({
              setHeaders: {
                'Authorization': `Bearer ${newAccessToken}`
              }
            });
            return next(newRequest);
          }),
          catchError((err) => {
            isRefreshing.set(false);
            store.dispatch(authActions.logout());
            return throwError(() => err);
          })
        );
      }
      return throwError(() => error);
    })
  );
};
