import {createActionGroup, props} from '@ngrx/store';
import {AppStoreState} from './app.state';


export const appActions = createActionGroup({
  source: 'AppStore',
  events: {
    'Get Auth Data': props<AppStoreState>()
  }
});
