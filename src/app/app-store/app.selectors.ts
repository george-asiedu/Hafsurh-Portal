import {createSelector} from '@ngrx/store';
import {selectAdminFeature} from '../admin/store/admin.selector';
import {selectAuthFeature} from '../auth/store/auth.selectors';

export const appStateSelector = createSelector(
  selectAuthFeature,
  selectAdminFeature,
  (auth, admin) => ({auth, admin}),
);
