import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { AskQuestionComponent } from './users/ask-question/ask-question.component';
import { ViewQuestionComponent } from './static/view-question/view-question.component';
import { AuthGuard } from './services/auth/auth.guard';
import { SettingsComponent } from './experts/settings/settings.component';
import { FilteredQuestionListComponent } from './static/filtered-question-list/filtered-question-list.component';
import { ExpertQuestionsComponent } from './static/expert-questions/expert-questions.component';
import { UserQuestionsComponent } from './static/user-questions/user-questions.component';
import { TopicPageComponent } from './static/choose-topic-page/topic-page.component';
import { SpecificTagInfoComponent } from './static/view-topic/specific-tag-info.component';
import { TopicExpertsComponent } from './static/topic-experts/topic-experts.component';
import { AskMeAnythingPageComponent } from './ask-me-anything/ask-me-anything-page/ask-me-anything-page.component';
import { QuestionRouteComponent } from './static/question-route/question-route.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'ask', component: AskQuestionComponent, canActivate: [AuthGuard] },
  { path: 'view-question', component: ViewQuestionComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'questions', component: FilteredQuestionListComponent, canActivate: [AuthGuard] },
  { path: 'expert-questions', component: ExpertQuestionsComponent, canActivate: [AuthGuard] },
  { path: 'user-questions', component: UserQuestionsComponent, canActivate: [AuthGuard] },
  { path: 'topics', component: TopicPageComponent, canActivate: [AuthGuard] },
  { path: 'view-topic/:id', component: SpecificTagInfoComponent, canActivate: [AuthGuard] },
  { path: 'topic-experts', component: TopicExpertsComponent },

  { path: 'chat', component: AskMeAnythingPageComponent },
  { path: 'question/:id', component: QuestionRouteComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
