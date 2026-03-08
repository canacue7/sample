import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard/admin-dashboard.page').then((m) => m.AdminDashboardPageComponent),
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/users/admin-users.page').then((m) => m.AdminUsersPageComponent),
  },
];

