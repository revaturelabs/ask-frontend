import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { MaterialImportModule } from '../../material-import/material-import.module';
import { AskQuestionFormComponent } from './ask-question-form/ask-question-form.component';


@NgModule({
  declarations: [
    AskQuestionComponent,
    AskQuestionFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialImportModule,
  ]
})
export class UsersModule { }

