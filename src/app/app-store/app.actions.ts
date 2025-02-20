import {createActionGroup, props} from '@ngrx/store';
import {AppStore} from '../model/auth/auth';


export const appActions = createActionGroup({
  source: 'AppStore',
  events: {
    'Get Store Data': props<AppStore>()
  }
});
