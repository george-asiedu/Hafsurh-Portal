import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {UpdateBioModalComponent} from './update-bio-modal/update-bio-modal.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    UpdateBioModalComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
