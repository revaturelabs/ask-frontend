import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { AskQuestionComponent } from './users/ask-question/ask-question.component';
import { ViewQuestionComponent } from './static/view-question/view-question.component';
import { QuestionListComponent } from './static/question-list/question-list.component';
import { AuthGuard } from './services/auth/auth.guard';
import { QuestionFilterComponent } from './static/question-filter/question-filter.component';
import { SettingsComponent } from './experts/settings/settings.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent  },
  { path: 'ask', component: AskQuestionComponent, canActivate: [AuthGuard]  },
  { path: 'view-question', component: ViewQuestionComponent, canActivate: [AuthGuard]  },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]  },
  { path: 'questions', component: QuestionListComponent, canActivate: [AuthGuard] },
  { path: 'filter-questions', component: QuestionFilterComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
