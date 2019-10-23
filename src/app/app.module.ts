import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { QuestionListComponent } from './static/question-list/question-list.component';
import { ViewQuestionComponent } from './static/view-question/view-question.component';
import { AskQuestionComponent } from './users/ask-question/ask-question.component';
import { EnterResponseComponent } from './experts/enter-response/enter-response.component';
import { SelfTagsComponent } from './experts/self-tags/self-tags.component';
import { UserNavComponent } from './users/user-nav/user-nav.component';
import { ExpertNavComponent } from './experts/expert-nav/expert-nav.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { ExpertPageComponent } from './experts/expert-page/expert-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    QuestionListComponent,
    ViewQuestionComponent,
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
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
