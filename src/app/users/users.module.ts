import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskQuestionComponent } from './ask-question/ask-question.component';

import { SharedModule } from "../shared/shared.module";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
  declarations: [AskQuestionComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ],
  exports:[
    AskQuestionComponent,
  ]
})
export class UsersModule {}