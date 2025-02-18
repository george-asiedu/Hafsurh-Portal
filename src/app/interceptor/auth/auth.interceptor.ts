import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAccessToken } from '../../auth/store/auth.selectors';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const appUrl: string = environment.productionEnvironment;
  const store = inject(Store);
  const token = store.selectSignal(selectAccessToken);
  const bearerUrls = [`${appUrl}auth/refresh-token`, `${appUrl}users/`, `${appUrl}courses/`];

  if (bearerUrls.some(url => req.url.startsWith(url))) {
    const authReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token()}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
