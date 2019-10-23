import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';



@NgModule({
  declarations: [
    UserNavComponent,
    UserPageComponent,
    ViewQuestionComponent,
    AskQuestionComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
