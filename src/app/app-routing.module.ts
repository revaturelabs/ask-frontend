import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { AskQuestionComponent } from './users/ask-question/ask-question.component';
import { ViewQuestionComponent } from './question/view-question/view-question.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { AuthGuard } from './services/auth/auth.guard';
import { QuestionFilterComponent } from './question/question-filter/question-filter.component';
import { SettingsComponent } from './experts/settings/settings.component';
import { SelfTagsComponent } from './experts/self-tags/self-tags.component';
import { FilteredQuestionListComponent } from './question/filtered-question-list/filtered-question-list.component';
import { ExpertQuestionsComponent } from './question/expert-questions/expert-questions.component';
import { UserQuestionsComponent } from './question/user-questions/user-questions.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent  },
  { path: 'ask', component: AskQuestionComponent, canActivate: [AuthGuard]  },
  { path: 'view-question', component: ViewQuestionComponent, canActivate: [AuthGuard]  },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]  },
  { path: 'questions', component: FilteredQuestionListComponent, canActivate: [AuthGuard] },
  { path: 'expert-questions', component: ExpertQuestionsComponent, canActivate: [AuthGuard] },
  { path: 'user-questions', component: UserQuestionsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
