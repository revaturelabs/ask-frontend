import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../services/auth/auth.guard';

import { SpecificTagInfoComponent } from "./view-topic/specific-tag-info.component";
import { TopicQuestionsComponent } from './topic-questions/topic-questions.component';
import { TopicExpertsComponent } from './topic-experts/topic-experts.component';
import { TopicPageComponent } from './choose-topic-page/topic-page.component';

const routes: Routes = [{
  path: 'topic', children: [
    { path: 'experts', component: TopicExpertsComponent, canActivate: [AuthGuard] },
    { path: 'all', component: TopicPageComponent, canActivate: [AuthGuard] },
    { path: ':id', component: SpecificTagInfoComponent, canActivate: [AuthGuard] },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class TopicRoutingModule { }
