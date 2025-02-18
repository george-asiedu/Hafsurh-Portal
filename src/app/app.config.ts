import { ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode, importProvidersFrom
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import * as AuthEffects from './auth/store/auth.effects';
import * as ToastEffects from './app-store/toasts.effects';
import * as RouteEffects from './app-store/routes.effects';
import * as SpinnerEffects from './app-store/spinner.effects';
import {authFeature} from './auth/store/auth.reducers';
import {provideSpinnerConfig} from 'ngx-spinner';
import {authInterceptor} from './interceptor/auth/auth.interceptor';
import {refreshTokenInterceptor} from './interceptor/refresh_token/refresh-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor, refreshTokenInterceptor])),
    importProvidersFrom(NgToastModule),
    provideSpinnerConfig({ type: 'ball-spin-clockwise-fade'}),
    provideStore(),
    provideState(authFeature),
    provideEffects(AuthEffects, RouteEffects, ToastEffects, SpinnerEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
