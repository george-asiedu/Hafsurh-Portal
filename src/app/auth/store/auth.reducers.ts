import {AuthState} from './auth.state';
import {createFeature, createReducer, on} from '@ngrx/store';
import { authActions } from './auth.actions';

export const initialState: AuthState = {
  isLoading: false,
  error: null,
  data: null,
  message: null
};

export const authFeature = createFeature({
  name: 'Auth',
  reducer: createReducer(
    initialState,
    on(authActions.registerAccount, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.signin, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.verifyAccount, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.registerAccountSuccess, (state, { data }) => ({
      ...state,
      isLoading: false,
      data: { type: 'register' as const, response: data },
      error: null,
    })),
    on(authActions.signinSuccess, (state, { data }) => ({
      ...state,
      isLoading: false,
      data: { type: 'signin' as const, response: data },
      error: null,
    })),
    on(authActions.verifyAccountSuccess, (state, {message}) => ({
      ...state,
      isLoading: false,
      error: null,
      message
    })),
    on(authActions.refreshTokenSuccess, (state, {data}) => ({
      ...state,
      isLoading: false,
      error: null,
      data: { type: 'refreshToken' as const, response: data }
    })),
    on(authActions.authenticationFailure, (state, {error}) => ({
      ...state,
      isLoading: false,
      error
    })),
    on(authActions.logout, (state) => ({
      ...state,
      data: null,
    }))
  )
});
