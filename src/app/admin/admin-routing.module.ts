import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CoursesComponent} from './courses/courses.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Hafsurh\'s Portal | Admin Dashboard',
    children: [
      {path: '', component: DashboardComponent},
      {path: 'courses', component: CoursesComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
