import {AppStoreState} from './app.state';
import {createFeature, createReducer, on} from '@ngrx/store';
import {appActions} from './app.actions';

export const initialState: AppStoreState = {
  isLoading: false,
  error: null,
  user: null,
};

export const appStoreFeature = createFeature({
  name: 'AppStore',
  reducer: createReducer(
    initialState,
    on(appActions.getAuthData, (state, {user}) => ({
      ...state,
      user
    }))
  )
});
