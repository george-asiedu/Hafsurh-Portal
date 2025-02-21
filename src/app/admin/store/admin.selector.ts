import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AdminState} from './admin.state';

export const selectAdminFeature = createFeatureSelector<AdminState>('Admin');

export const getCourseId = (state: AdminState): string | null => {
  if (state.data?.type === 'addCourse') {
    return state.data.response.data.id;
  }
  return '';
};

export const getUserId = (state: AdminState): string | null => {
  if (state.user?.type === 'getUserProfile') {
    return state.user.response.data.id;
  }
  return '';
};

export const getCourseData = (state: AdminState) => {
  if (state.data?.type === 'getCourses') {
    return state.data.response.data;
  }
  return [];
}

export const getUserData = (state: AdminState) => {
  if (state.user?.type === 'getAllUsers') {
    return state.user.response.data;
  }
  return [];
}

export const selectCourseId = createSelector(
  selectAdminFeature,
  getCourseId
);

export const selectLoading = createSelector(
  selectAdminFeature,
  (state) => state.isLoading
);

export const selectCoursesData = createSelector(
  selectAdminFeature,
  getCourseData
);

export const selectUserId = createSelector(
  selectAdminFeature,
  getUserId
)

export const selectUsersData = createSelector(
  selectAdminFeature,
  getUserData
)
