import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './users/user-page/user-page.component';
import { ExpertPageComponent } from './experts/expert-page/expert-page.component';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { AskQuestionComponent } from './users/ask-question/ask-question.component';
import { SelfTagsComponent } from './experts/self-tags/self-tags.component';
import { QuestionListComponent } from './static/question-list/question-list.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'ask', component: AskQuestionComponent},
  { path: 'user-page', component: UserPageComponent},
  { path: 'expert-page', component: ExpertPageComponent},
  {path: 'settings', component: SelfTagsComponent},
  {path: 'questions', component: QuestionListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [UserPageComponent,ExpertPageComponent]
