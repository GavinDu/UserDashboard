import { Route } from '@angular/router';

import { UserDetailComponent } from './index';

export const UserDetailRoutes: Route[] = [
  {
    path: 'userdetails/:id',
    component: UserDetailComponent
  }
];
