import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './users/user-page/user-page.component';
import { ExpertPageComponent } from './experts/expert-page/expert-page.component';

const routes: Routes = [
  {
    path:"user-page",
    component: UserPageComponent
  },
  {
    path:"expert-page",
    component: ExpertPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
