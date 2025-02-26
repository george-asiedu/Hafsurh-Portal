import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './auth.state';

export const selectAuthFeature = createFeatureSelector<AuthState>('Auth');

export const getRegisterToken = (state: AuthState): string | null => {
  if (state.data?.type === 'register') {
    return state.data.response.data.token;
  }
  return null;
};

export const getAccessToken = (state: AuthState): string | null => {
  if (state.data?.type === 'signin') {
    return state.data.response.data.accessToken;
  }
  return null;
};

export const getRefreshToken = (state: AuthState): string | null => {
  if (state.data?.type === 'signin') {
    return state.data.response.data.refreshToken;
  }
  return null;
};

export const getUser = (state: AuthState) => {
  if (state.data?.type === 'signin') {
    return state.data.response.data.user;
  }
  return null;
}

export const getUserId = (state: AuthState)=> {
  if (state.data?.type === 'signin') {
    return state.data.response.data.user.id;
  }
  return '';
}

export const selectIsLoading = createSelector(
  selectAuthFeature,
  (state) => state.isLoading
);

export const selectAccessToken = createSelector(selectAuthFeature, getAccessToken);
export const selectRefreshToken = createSelector(selectAuthFeature, getRefreshToken);
export const selectUser = createSelector(selectAuthFeature, getUser);
export const selectRegisterToken = createSelector(selectAuthFeature, getRegisterToken);
export const selectUserId = createSelector(selectAuthFeature, getUserId);
