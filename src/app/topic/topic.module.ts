import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecificTagInfoComponent } from "./view-topic/specific-tag-info.component";
import { SharedModule } from '../shared/shared.module';
import { TopicQuestionsComponent } from './topic-questions/topic-questions.component';
import { TopicExpertsComponent } from './topic-experts/topic-experts.component';
import { TopicPageComponent } from './choose-topic-page/topic-page.component';

@NgModule({
  declarations: [
    SpecificTagInfoComponent,
    TopicQuestionsComponent,
    TopicExpertsComponent,
    TopicPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SpecificTagInfoComponent,
    TopicQuestionsComponent,
    TopicExpertsComponent,
    TopicPageComponent
  ]
})
export class TopicModule { }
