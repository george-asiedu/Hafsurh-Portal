import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {SuccessResponse} from '../../model/auth/auth';
import {
  AddCourse,
  CourseResponse,
  GetAllCourses,
  UpdateCourse
} from '../../model/courses/courses';
import {HttpErrorResponse} from '@angular/common/http';
import {GetAllUsers, Profile} from '../../model/users/users';

export const adminActions = createActionGroup({
  source: 'Admin',
  events: {
    'Add Course': props<{ course: AddCourse }>(),
    'Get All Courses': emptyProps(),
    'Update Course': props<{ course: UpdateCourse }>(),
    'Course Success': props<{ data: CourseResponse }>(),
    'Update Course Success': props<{ data: CourseResponse }>(),
    'Get All Courses Success': props<{ data: GetAllCourses }>(),
    'Delete Course': props<{ id: string }>(),
    'Delete Course Success': props<{message: SuccessResponse}>(),
    'Course Failure': props<{ error: HttpErrorResponse }>(),
    'Get All Users': emptyProps(),
    'Get User Profile': props<{ id: string }>(),
    'Get User Profile Success': props<{ user: Profile }>(),
    'Get All Users Success': props<{ user: GetAllUsers }>(),
    'User Failure': props<{ error: HttpErrorResponse }>(),
  }
});
