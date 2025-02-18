import { Routes } from '@angular/router';
import {authGuard} from './guard/auth.guard';
import {Roles} from './model/auth/auth';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canActivate: [authGuard],
    data: {roles: [Roles.Student]}
  },
];
