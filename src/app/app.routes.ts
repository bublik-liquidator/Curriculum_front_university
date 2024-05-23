import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { CurriculumContentComponent } from './components/curriculum-content/curriculum-content.component';
import { UserContentComponent } from './components/user-content/user-content.component';
import { AuthGuard } from './auth.guard';
import { SpecialtyContentComponent } from './components/specialty-content/specialty-content.component';
import { StatusContentComponent } from './components/status-content/status-content.component';
import { AdminGuard } from './admin.guard';
import { EducationContentComponent } from './components/education-content/education-content.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'account',
    loadComponent: () =>
      import('./components/account/account.component').then(
        (m) => m.AccountComponent
      ),
    canActivate: [AuthGuard],
    children: [
      {
        path: 'Users',
        loadComponent: () =>
          import('./components/user-content/user-content.component').then(
            (m) => m.UserContentComponent
          ),
        canActivate: [AdminGuard],
      },
      {
        path: 'Curriculas',
        loadComponent: () =>
          import(
            './components/curriculum-content/curriculum-content.component'
          ).then((m) => m.CurriculumContentComponent),
        canActivate: [AuthGuard],
      },
      {
        path: 'Specialties',
        loadComponent: () =>
          import(
            './components/specialty-content/specialty-content.component'
          ).then((m) => m.SpecialtyContentComponent),
        canActivate: [AdminGuard],
      },
      {
        path: 'Educations',
        loadComponent: () =>
          import(
            './components/education-content/education-content.component'
          ).then((m) => m.EducationContentComponent),
        canActivate: [AdminGuard],
      },
      {
        path: 'Statuses',
        loadComponent: () =>
          import('./components/status-content/status-content.component').then(
            (m) => m.StatusContentComponent
          ),
        canActivate: [AdminGuard],
      },
    ],
  },
];
