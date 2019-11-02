import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { MaterialImportModule } from '../../material-import/material-import.module';
import { PreviewQuestionComponent } from './preview-question/preview-question.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionFilterComponent } from './question-filter/question-filter.component';
import { FilteredQuestionListComponent } from './filtered-question-list/filtered-question-list.component';

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
  ],
  imports: [
    CommonModule,
    MaterialImportModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class StaticModule {}
