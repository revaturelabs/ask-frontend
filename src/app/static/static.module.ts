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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilteredQuestionListComponent } from './filtered-question-list/filtered-question-list.component';
import { ExpertQuestionsComponent } from './expert-questions/expert-questions.component';
import { UserQuestionsComponent } from './user-questions/user-questions.component';

@NgModule({
  declarations: [
    FooterComponent,
    LoginPageComponent,
    ViewQuestionComponent,
    QuestionListComponent,
    PreviewQuestionComponent,
    NavbarComponent,
    QuestionFilterComponent,
    FilteredQuestionListComponent,
    ExpertQuestionsComponent,
    UserQuestionsComponent,
  ],
  imports: [
    CommonModule,
    MaterialImportModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class StaticModule {}
