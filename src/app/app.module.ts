import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { QuestionListComponent } from './static/question-list/question-list.component';
import { PreviewQuestionComponent } from './static/preview-question/preview-question.component';
import { ViewQuestionComponent } from './static/view-question/view-question.component';
import { QuestionComponent } from './static/question/question.component';
import { ResponseComponent } from './static/response/response.component';
import { AskQuestionComponent } from './users/ask-question/ask-question.component';
import { EnterResponseComponent } from './experts/enter-response/enter-response.component';
import { SelfTagsComponent } from './experts/self-tags/self-tags.component';
import { MaterialImportModule } from '../material-import/material-import.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './static/navbar/navbar.component';
import { FooterComponent } from './static/footer/footer.component';
import {ExpertPageComponent} from '../app/experts/expert-page/expert-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    QuestionListComponent,
    PreviewQuestionComponent,
    ViewQuestionComponent,
    QuestionComponent,
    ResponseComponent,
    AskQuestionComponent,
    EnterResponseComponent,
    SelfTagsComponent,
    routingComponents,
    NavbarComponent,
    FooterComponent,
    ExpertPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialImportModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
