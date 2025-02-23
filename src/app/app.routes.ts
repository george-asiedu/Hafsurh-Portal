import { Routes } from '@angular/router';
import {authGuard} from './guard/auth.guard';
import {Roles} from './model/auth/auth';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [authGuard],
    data: {roles: [Roles.Admin]}
  },
  {
    path: 'student-dashboard',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canActivate: [authGuard],
    data: {roles: [Roles.Student]}
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),
    canActivate: [authGuard],
    data: {roles: [Roles.Student, Roles.Admin]}
  }
];
