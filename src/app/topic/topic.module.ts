import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { SpecificTagInfoComponent } from "./view-topic/specific-tag-info.component";
import { TopicQuestionsComponent } from './topic-questions/topic-questions.component';
import { TopicExpertsComponent } from './topic-experts/topic-experts.component';
import { TopicPageComponent } from './choose-topic-page/topic-page.component';
import { TopicRoutingModule } from "./topic-routing.module";

@NgModule({
  declarations: [
    SpecificTagInfoComponent,
    TopicQuestionsComponent,
    TopicExpertsComponent,
    TopicPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TopicRoutingModule
  ],
  exports: [
    SpecificTagInfoComponent,
    TopicQuestionsComponent,
    TopicExpertsComponent,
    TopicPageComponent
  ]
})
export class TopicModule { }
