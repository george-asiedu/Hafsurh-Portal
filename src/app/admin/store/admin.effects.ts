import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {AdminService} from '../service/admin.service';
import {adminActions} from './admin.actions';
import {filter, switchMap, withLatestFrom} from 'rxjs';
import {mapResponse} from '@ngrx/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AdminState} from './admin.state';
import {selectCourseId, selectUserId} from './admin.selector';

export const addCourseEffects = createEffect(
  (actions$ = inject(Actions), adminService = inject(AdminService)) => {
    return actions$.pipe(
      ofType(adminActions.addCourse),
      switchMap(({course}) =>
        adminService.addCourse(course).pipe(
          mapResponse({
            next: (response) => adminActions.courseSuccess({data: response}),
            error: (error: HttpErrorResponse) => adminActions.courseFailure({error})
          })
        )
      )
    );
  }, { functional: true, dispatch: true }
)

export const updateCourseEffects = createEffect(
  (actions$ = inject(Actions),
   adminService = inject(AdminService),
   store = inject(Store<AdminState>)) => {
    return actions$.pipe(
      ofType(adminActions.updateCourse),
      withLatestFrom(store.select(selectCourseId)),
      filter(([, id]) => !!id && id !== ''),
      switchMap(([{ course }, id]) =>
        adminService.updateCourse(id as string, course).pipe(
          mapResponse({
            next: (response) => adminActions.updateCourseSuccess({data: response}),
            error: (error: HttpErrorResponse) => adminActions.courseFailure({error})
          })
        )
      )
    );
  }, { functional: true, dispatch: true }
)

export const getAllCoursesEffects = createEffect(
  (actions$ = inject(Actions), adminService = inject(AdminService)) => {
    return actions$.pipe(
      ofType(adminActions.getAllCourses),
      switchMap(() =>
        adminService.getAllCourses().pipe(
          mapResponse({
            next: (response) => adminActions.getAllCoursesSuccess({data: response}),
            error: (error: HttpErrorResponse) => adminActions.courseFailure({error})
          })
        )
      )
    );
  }, { functional: true, dispatch: true }
)

export const registerCoursesEffects = createEffect(
  (actions$ = inject(Actions),
   adminService = inject(AdminService),
   store = inject(Store<AdminState>)) => {
    return actions$.pipe(
      ofType(adminActions.registerCourse),
      withLatestFrom(store.select(selectCourseId)),
      filter(([, id]) => !!id && id !== ''),
      switchMap(([_, id]) =>
        adminService.registerCourse(id as string).pipe(
          mapResponse({
            next: (response) => adminActions.courseRegistrationSuccess({message: response}),
            error: (error: HttpErrorResponse) => adminActions.courseFailure({error})
          })
        )
      )
    );
  }, { functional: true, dispatch: true }
)

export const deleteCourseEffects = createEffect(
  (actions$ = inject(Actions),
   adminService = inject(AdminService),
   store = inject(Store<AdminState>)) => {
    return actions$.pipe(
      ofType(adminActions.deleteCourse),
      withLatestFrom(store.select(selectCourseId)),
      filter(([, id]) => !!id && id !== ''),
      switchMap(([_, id]) =>
        adminService.deleteCourse(id as string).pipe(
          mapResponse({
            next: (response) => adminActions.deleteCourseSuccess({message: response}),
            error: (error: HttpErrorResponse) => adminActions.courseFailure({error})
          })
        )
      )
    );
  }, { functional: true, dispatch: true }
)

export const getAllUsersEffects = createEffect(
  (actions$ = inject(Actions), adminService = inject(AdminService)) => {
    return actions$.pipe(
      ofType(adminActions.getAllUsers),
      switchMap(() =>
        adminService.getAllUsers().pipe(
          mapResponse({
            next: (response) => adminActions.getAllUsersSuccess({user: response}),
            error: (error: HttpErrorResponse) => adminActions.userFailure({error})
          })
        )
      )
    );
  }, { functional: true, dispatch: true }
)

export const userProfileEffects = createEffect(
  (actions$ = inject(Actions),
   adminService = inject(AdminService),
   store = inject(Store)
  ) => {
    return actions$.pipe(
      ofType(adminActions.getUserProfile),
      withLatestFrom(store.select(selectUserId)),
      filter(([, id]) => !!id && id !== ''),
      switchMap(([_, id]) =>
        adminService.getUserProfile(id as string).pipe(
          mapResponse({
            next: (response) => adminActions.getUserProfileSuccess({user: response}),
            error: (error: HttpErrorResponse) => adminActions.userFailure({error})
          })
        )
      )
    );
  }, { functional: true, dispatch: true }
)

export const updateBioEffects = createEffect(
  (actions$ = inject(Actions),
   adminService = inject(AdminService),
   store = inject(Store)
  ) => {
    return actions$.pipe(
      ofType(adminActions.updateUserBio),
      withLatestFrom(store.select(selectUserId)),
      filter(([, id]) => !!id && id !== ''),
      switchMap(([{user}, id]) =>
        adminService.updateBioData(id as string, user).pipe(
          mapResponse({
            next: (response) => adminActions.updateUserBioSuccess({user: response}),
            error: (error: HttpErrorResponse) => adminActions.userFailure({error})
          })
        )
      )
    );
  }, { functional: true, dispatch: true }
)
