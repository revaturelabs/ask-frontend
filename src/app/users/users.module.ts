import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskQuestionComponent } from './ask-question/ask-question.component';

import { SharedModule } from "../shared/shared.module";
import { UsersRoutingModule } from "./users-routing.module";
import { EditQuestionViewComponent } from './edit-question-view/edit-question-view.component';
import { EditQuestionRouteComponent } from './edit-question-route/edit-question-route.component';

@NgModule({
  declarations: [AskQuestionComponent, EditQuestionViewComponent, EditQuestionRouteComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,  
  ],
  exports:[
    AskQuestionComponent,
    EditQuestionViewComponent,
    EditQuestionRouteComponent
  ]
})
export class UsersModule {}