import { NgModule } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import {RouterOutlet} from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterOutlet,
    NgIf,
    NgxSpinnerModule
  ]
})
export class AdminModule { }
