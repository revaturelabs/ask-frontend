import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { MaterialImportModule } from '../../material-import/material-import.module';



@NgModule({
  declarations: [
    FooterComponent,
    LoginPageComponent,
    ViewQuestionComponent,
    QuestionListComponent,
  ],
  imports: [
    CommonModule,
    MaterialImportModule,
  ]
})
export class StaticModule { }
