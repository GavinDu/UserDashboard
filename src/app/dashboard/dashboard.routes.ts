import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { BSComponentRoutes } from './bs-component/index';
import { ApplicationRoutes } from './application-component/index';
import { DashboardComponent } from './index';
import { UserRoutes } from './user-component/index';
import { UserDetailRoutes } from './user-detail-component/index';
import { AuthGuard } from '../guard/auth.guard';
export const DashboardRoutes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      ...HomeRoutes,
      ...BSComponentRoutes,
      ...ApplicationRoutes,
      ...UserDetailRoutes,
      ...UserRoutes
      ],
    canActivate: [AuthGuard]
  }
];
