import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ExpertPageComponent } from './expert-page/expert-page.component';
import { UserPageComponent } from './user-page/user-page.component';


const routes: Routes = [
  {
    path:"",
    component: LoginPageComponent
  },
  {
    path: "expert-page",
    component: ExpertPageComponent
  },
  {
    path: "user-page",
    component: UserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
