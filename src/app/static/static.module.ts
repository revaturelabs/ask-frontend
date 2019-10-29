import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { MaterialImportModule } from '../../material-import/material-import.module';
import { PreviewQuestionComponent } from './preview-question/preview-question.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionFilterComponent } from './question-filter/question-filter.component';

@NgModule({
  declarations: [
    FooterComponent,
    LoginPageComponent,
    ViewQuestionComponent,
    QuestionListComponent,
    PreviewQuestionComponent,
    NavbarComponent,
    QuestionFilterComponent,
  ],
  imports: [CommonModule, MaterialImportModule],
})
export class StaticModule {}
