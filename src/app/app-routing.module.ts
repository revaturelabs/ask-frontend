import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './users/user-page/user-page.component';
import { ExpertPageComponent } from './experts/expert-page/expert-page.component';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { AskQuestionComponent } from './users/ask-question/ask-question.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'ask', component: AskQuestionComponent},
  {path: 'user-page', component: UserPageComponent},
  {path: 'expert-page', component: ExpertPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [UserPageComponent,ExpertPageComponent]
