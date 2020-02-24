import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { AuthGuard } from './services/auth/auth.guard';
import { TopicPageComponent } from './topic/choose-topic-page/topic-page.component';
import { SpecificTagInfoComponent } from './topic/view-topic/specific-tag-info.component';
import { TopicExpertsComponent } from './topic/topic-experts/topic-experts.component';
import { AskMeAnythingPageComponent } from './ask-me-anything/ask-me-anything-page/ask-me-anything-page.component';
import { EditQuestionRouteComponent } from './users/edit-question-route/edit-question-route.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'topics', component: TopicPageComponent, canActivate: [AuthGuard] },
  { path: 'view-topic/:id', component: SpecificTagInfoComponent, canActivate: [AuthGuard] },
  { path: 'topic-experts', component: TopicExpertsComponent },
  { path: 'chat', component: AskMeAnythingPageComponent },
  { path: 'edit-question/:id', component: EditQuestionRouteComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
