import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { AskQuestionComponent } from './users/ask-question/ask-question.component';
import { ViewQuestionComponent } from './question/view-question/view-question.component';
import { AuthGuard } from './services/auth/auth.guard';
import { SettingsComponent } from './experts/settings/settings.component';
import { SelfTagsComponent } from './experts/self-tags/self-tags.component';
import { FilteredQuestionListComponent } from './question/filtered-question-list/filtered-question-list.component';
import { QuestionRouteComponent } from './question/question-route/question-route.component';
import { AskMeAnythingPageComponent } from './ask-me-anything/ask-me-anything-page/ask-me-anything-page.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent  },
  { path: 'ask', component: AskQuestionComponent, canActivate: [AuthGuard]  },
  { path: 'view-question', component: ViewQuestionComponent, canActivate: [AuthGuard]  },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]  },
  { path: 'questions', component: FilteredQuestionListComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: AskMeAnythingPageComponent },

  { path: 'question/:id', component: QuestionRouteComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
