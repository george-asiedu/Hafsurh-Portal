import {CourseResponse, GetAllCourses} from '../../model/courses/courses';
import {SuccessResponse} from '../../model/auth/auth';
import {HttpErrorResponse} from '@angular/common/http';
import {GetAllUsers, Profile} from '../../model/users/users';

export interface AdminState {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  data: {type: 'addCourse', response: CourseResponse} |
    {type: 'updateCourse', response: CourseResponse} |
    {type: 'getCourses', response: GetAllCourses} |
    null;
  user: {type: 'getUserProfile', response: Profile} | {type: 'getAllUsers', response: GetAllUsers} | null;
  message: SuccessResponse | null;
}
