import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from '../question/question-list/question-list.component';
import { PreviewQuestionComponent } from '../question/preview-question/preview-question.component';
import { ViewQuestionComponent } from '../question/view-question/view-question.component';
import { QuestionComponent } from '../question/question/question.component';
import { QuestionFilterComponent } from '../question/question-filter/question-filter.component';
import { FilteredQuestionListComponent } from '../question/filtered-question-list/filtered-question-list.component';
import { ExpertQuestionsComponent } from '../question/expert-questions/expert-questions.component';
import { UserQuestionsComponent } from '../question/user-questions/user-questions.component';
import { EnterResponseComponent } from '../experts/enter-response/enter-response.component';
import { HighlightedResponseComponent } from '../../app/static/highlighted-response/highlighted-response.component';
import { ResponseComponent } from '../static/response/response.component';
import { MaterialImportModule } from '../../material-import/material-import.module';
import { MatChipsModule } from "@angular/material/chips";


import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    QuestionComponent,
    QuestionListComponent,
    PreviewQuestionComponent,
    ViewQuestionComponent,
    QuestionFilterComponent,
    FilteredQuestionListComponent,
    ExpertQuestionsComponent,
    UserQuestionsComponent,
    EnterResponseComponent,
    HighlightedResponseComponent,
    ResponseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule,
    MaterialImportModule,
    MatChipsModule
  ],
  exports: [
    QuestionComponent,
    QuestionListComponent,
    PreviewQuestionComponent,
    ViewQuestionComponent,
    QuestionFilterComponent,
    FilteredQuestionListComponent,
    ExpertQuestionsComponent,
    UserQuestionsComponent,
    EnterResponseComponent,
    ResponseComponent
  ]
})
export class QuestionModule { }
