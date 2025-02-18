import {createActionGroup, props} from '@ngrx/store';
import {AuthState} from '../auth/store/auth.state';


export const appActions = createActionGroup({
  source: 'AppStore',
  events: {
    'Get Store Data': props<AuthState>()
  }
});
