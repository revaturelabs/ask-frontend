import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from '../question/question-list/question-list.component';
import { PreviewQuestionComponent } from '../question/preview-question/preview-question.component';
import { ViewQuestionComponent } from '../question/view-question/view-question.component';
import { QuestionComponent } from '../question/question/question.component';
import { QuestionFilterComponent } from '../question/question-filter/question-filter.component';
import { FilteredQuestionListComponent } from '../question/filtered-question-list/filtered-question-list.component';
import { EnterResponseComponent } from './enter-response/enter-response.component';
import { HighlightedResponseComponent } from './highlighted-response/highlighted-response.component';
import { ResponseComponent } from './response/response.component';
import { QuestionRouteComponent } from "./question-route/question-route.component";

import { SharedModule } from '../shared/shared.module';

import { QuestionRoutingModule } from "./question-routing.module";

@NgModule({
  declarations: [
    QuestionComponent,
    QuestionListComponent,
    PreviewQuestionComponent,
    ViewQuestionComponent,
    QuestionFilterComponent,
    FilteredQuestionListComponent,
    EnterResponseComponent,
    HighlightedResponseComponent,
    QuestionRouteComponent,
    ResponseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuestionRoutingModule
  ],
  exports: [
    QuestionComponent,
    QuestionListComponent,
    PreviewQuestionComponent,
    ViewQuestionComponent,
    QuestionFilterComponent,
    FilteredQuestionListComponent,
    EnterResponseComponent,
    HighlightedResponseComponent,
    QuestionRouteComponent,
    ResponseComponent
  ]
})
export class QuestionModule { }