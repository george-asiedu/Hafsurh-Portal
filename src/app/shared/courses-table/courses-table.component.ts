import {Component, inject, OnInit} from '@angular/core';
import {Course} from '../../model/courses/courses';
import {Store} from '@ngrx/store';
import {AdminState} from '../../admin/store/admin.state';
import {adminActions} from '../../admin/store/admin.actions';
import {selectCoursesData, selectLoading} from '../../admin/store/admin.selector';

@Component({
  selector: 'app-courses-table',
  standalone: false,
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.scss'
})
export class CoursesTableComponent implements OnInit {
  public isEditModalOpen: boolean = false;
  public isDropdownVisible: boolean[] = [];
  public selectedCourse: Course | null = null;
  public courses: Course[] = [];
  private store = inject(Store<AdminState>);
  public isLoading = this.store.selectSignal(selectLoading);
  public coursesData = this.store.selectSignal(selectCoursesData);

  constructor() {}

  public ngOnInit() {
    this.store.dispatch(adminActions.getAllCourses());
    this.isDropdownVisible = new Array(this.courses.length).fill(false);
  }

  toggleDropdown(index: number) {
    this.isDropdownVisible = this.isDropdownVisible.map((visible, i) =>
      i === index ? !visible : false
    );
  }

  OpenEditCourse(course: Course) {
    this.selectedCourse = course;
    this.isEditModalOpen = true;
  }

  closeEditCourseModal() {
    this.isEditModalOpen = false;
    this.selectedCourse = null;
  }

  onEditCourseSubmit() {
    this.isEditModalOpen = false;
  }

  deleteCourse(id: string) {
    this.store.dispatch(adminActions.deleteCourse({id}));
  }
}
