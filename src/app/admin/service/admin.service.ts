import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AddCourse, CourseResponse, GetAllCourses, UpdateCourse} from '../../model/courses/courses';
import {environment} from '../../../environments/environment';
import {SuccessResponse} from '../../model/auth/auth';
import {GetAllUsers, Profile, UpdateBio} from '../../model/users/users';
import {Store} from '@ngrx/store';
import {selectUserId} from '../../auth/store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private appUrl: string = environment.productionEnvironment;

  constructor(private http: HttpClient, private store: Store) {}

  public getAllCourses() {
    return this.http.get<GetAllCourses>(`${this.appUrl}courses/all-courses`);
  }

  public addCourse(course: AddCourse) {
    return this.http.post<CourseResponse>(`${this.appUrl}courses/add-course`, course);
  }

  public updateCourse(id: string, course: UpdateCourse) {
    return this.http.patch<CourseResponse>(`${this.appUrl}courses/update-course/${id}`, course);
  }

  public registerCourse(courseId: string) {
    const authInfo= this.store.selectSignal(selectUserId);
    const userId = authInfo();
    return this.http.post<SuccessResponse>(`${this.appUrl}courses/register/${courseId}`, {userId});
  }

  public deleteCourse(id: string) {
    return this.http.delete<SuccessResponse>(`${this.appUrl}courses/${id}`);
  }

  public getUserProfile(id: string) {
    return this.http.get<Profile>(`${this.appUrl}users/profile/${id}`);
  }

  public getAllUsers() {
    return this.http.get<GetAllUsers>(`${this.appUrl}users/all-users`);
  }

  public updateBioData(id: string, user: UpdateBio) {
    return this.http.patch<Profile>(`${this.appUrl}users/bio-data/${id}`, user);
  }
}
