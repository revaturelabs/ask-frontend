import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';

import { ProfileUserComponent } from './profile-user/profile-user.component';

const routes: Routes = [{
    path: 'profile', children: [
        { path: ':id', component: ProfileUserComponent, canActivate: [AuthGuard] },
    ]
}];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
