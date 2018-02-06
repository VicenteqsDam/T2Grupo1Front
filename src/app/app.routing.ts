import {Routes, RouterModule} from '@angular/router';

import {CarListComponent} from './car-list/car-list.component';
import {CarEditComponent} from './car-edit/car-edit.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './_guards/auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'car-list',
    component: CarListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'car-add',
    component: CarEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent,
    canActivate: [AuthGuard]
  },
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }
];

export const routing = RouterModule.forRoot(appRoutes);
