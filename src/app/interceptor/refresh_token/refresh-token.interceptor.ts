import {HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {catchError, switchMap, throwError} from 'rxjs';
import { AuthService } from '../../auth/service/auth.service';
import { authActions } from '../../auth/store/auth.actions';

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const store = inject(Store);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !authService.getIsRefreshing()) {
        authService.setIsRefreshing(true);

        return authService.refreshToken().pipe(
          switchMap((response) => {
            store.dispatch(authActions.refreshTokenSuccess({ data: response }));
            authService.setIsRefreshing(false);
            const newAccessToken = response.data.accessToken;
            const newRequest = req.clone({
              setHeaders: {
                'Authorization': `Bearer ${newAccessToken}`
              }
            });
            return next(newRequest);
          }),
          catchError((err: HttpErrorResponse) => {
            authService.setIsRefreshing(false);
            store.dispatch(authActions.logout());
            return throwError(() => err.error.message);
          })
        );
      }
      return throwError(() => error);
    })
  );
};
