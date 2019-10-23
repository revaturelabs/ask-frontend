import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { ResponseComponent } from './response/response.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { EnterResponseComponent } from './enter-response/enter-response.component';
import { SelfTagsComponent } from './self-tags/self-tags.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { ExpertNavComponent } from './expert-nav/expert-nav.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ExpertPageComponent } from './expert-page/expert-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    QuestionListComponent,
    ViewQuestionComponent,
    ResponseComponent,
    AskQuestionComponent,
    EnterResponseComponent,
    SelfTagsComponent,
    UserNavComponent,
    ExpertNavComponent,
    UserPageComponent,
    ExpertPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
