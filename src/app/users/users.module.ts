import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskQuestionComponent } from './ask-question/ask-question.component';

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AskQuestionComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    AskQuestionComponent,
  ]
})
export class UsersModule {}