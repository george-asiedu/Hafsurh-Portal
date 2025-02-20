import { NgModule } from '@angular/core';
import {CommonModule, DatePipe, NgClass, NgFor, NgIf} from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterLink} from '@angular/router';
import { CoursesTableComponent } from './courses-table/courses-table.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { EditCourseModalComponent } from './edit-course-modal/edit-course-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddCourseModalComponent } from './add-course-modal/add-course-modal.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CoursesTableComponent,
    EditCourseModalComponent,
    AddCourseModalComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgFor,
    NgIf,
    NgClass,
    DatePipe,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    CoursesTableComponent,
    AddCourseModalComponent,
    CoursesTableComponent
  ]
})
export class SharedModule { }
