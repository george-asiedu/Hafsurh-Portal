import {AdminState} from './admin.state';
import {createFeature, createReducer, on} from '@ngrx/store';
import {adminActions} from './admin.actions';
import {appActions} from '../../app-store/app.actions';

export const initialState: AdminState = {
  isLoading: false,
  error: null,
  data: null,
  user: null,
  message: null
}

export const adminFeature = createFeature({
  name: 'Admin',
  reducer: createReducer(
    initialState,
    on(adminActions.addCourse, (state) => ({
      ...state,
      isLoading: true
    })),
    on(adminActions.updateCourse, (state) => ({
      ...state,
      isLoading: true
    })),
    on(adminActions.deleteCourse, (state, {id}) => ({
      ...state,
      isLoading: true,
      id
    })),
    on(adminActions.getAllCourses, (state) => ({
      ...state,
      isLoading: true
    })),
    on(adminActions.getAllCoursesSuccess, (state, {data}) => ({
      ...state,
      isLoading: false,
      data: { type: 'getCourses' as const, response: data }
    })),
    on(adminActions.registerCourse, (state, {courseId}) => ({
      ...state,
      isLoading: true,
      courseId
    })),
    on(adminActions.courseRegistrationSuccess, (state, {message}) => ({
      ...state,
      isLoading: false,
      message
    })),
    on(adminActions.deleteCourseSuccess, (state, {message}) => ({
      ...state,
      isLoading: false,
      message
    })),
    on(adminActions.courseSuccess, (state, {data}) => ({
      ...state,
      isLoading: false,
      data: { type: 'addCourse' as const, response: data }
    })),
    on(adminActions.updateCourseSuccess, (state, {data}) => ({
      ...state,
      isLoading: false,
      data: { type: 'updateCourse' as const, response: data }
    })),
    on(adminActions.courseFailure, (state, {error}) => ({
      ...state,
      isLoading: false,
      error
    })),
    on(adminActions.getAllUsers, (state) => ({
      ...state,
      isLoading: true
    })),
    on(adminActions.getAllUsersSuccess, (state, {user}) => ({
      ...state,
      isLoading: false,
      user: { type: 'getAllUsers' as const, response: user }
    })),
    on(adminActions.updateUserBio, (state) => ({
      ...state,
      isLoading: true
    })),
    on(adminActions.updateUserBioSuccess, (state, {user}) => ({
      ...state,
      isLoading: false,
      user: { type: 'updateBio' as const, response: user }
    })),
    on(adminActions.getUserProfile, (state) => ({
      ...state,
      isLoading: true
    })),
    on(adminActions.getUserProfileSuccess, (state, {user}) => ({
      ...state,
      isLoading: false,
      user: { type: 'getUserProfile' as const, response: user }
    })),
    on(adminActions.userFailure, (state, {error}) => ({
      ...state,
      isLoading: false,
      error
    })),
    on(appActions.getStoreData, (state, {admin}) => ({
      ...state,
      ...admin
    }))
  )
})
