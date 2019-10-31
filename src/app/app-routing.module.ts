import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { AskQuestionComponent } from './users/ask-question/ask-question.component';
import { ViewQuestionComponent } from './static/view-question/view-question.component';
import { SelfTagsComponent } from './experts/self-tags/self-tags.component';
import { QuestionListComponent } from './static/question-list/question-list.component';
import { QuestionFilterComponent } from './static/question-filter/question-filter.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'ask', component: AskQuestionComponent },
  { path: 'view-question', component: ViewQuestionComponent },
  { path: 'settings', component: SelfTagsComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'filter', component: QuestionFilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
