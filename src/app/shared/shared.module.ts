import { NgModule } from '@angular/core';
import {CommonModule, DatePipe, NgClass, NgFor, NgIf} from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterLink} from '@angular/router';
import { CoursesTableComponent } from './courses-table/courses-table.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { EditCourseModalComponent } from './edit-course-modal/edit-course-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddCourseModalComponent } from './add-course-modal/add-course-modal.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { ProfileComponent } from './profile/profile.component';
import {SharedRoutingModule} from './shared-routing.module';
import { UpdateBioModalComponent } from './update-bio-modal/update-bio-modal.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CoursesTableComponent,
    EditCourseModalComponent,
    AddCourseModalComponent,
    UsersTableComponent,
    ProfileComponent,
    UpdateBioModalComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgFor,
    NgIf,
    NgClass,
    DatePipe,
    NgxSpinnerModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    CoursesTableComponent,
    AddCourseModalComponent,
    CoursesTableComponent,
    UsersTableComponent
  ]
})
export class SharedModule { }
