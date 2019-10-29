import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { MaterialImportModule } from '../../material-import/material-import.module';


@NgModule({
  declarations: [
    AskQuestionComponent,
  ],
  imports: [
    CommonModule,
    MaterialImportModule,
  ]
})
export class UsersModule { }

