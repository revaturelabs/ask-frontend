import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { QuestionPreviewComponent } from './question-preview/question-preview.component';
import { ResponseComponent } from './response/response.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { EnterResponseComponent } from './enter-response/enter-response.component';
import { SelfTagsComponent } from './self-tags/self-tags.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { ExpertNavComponent } from './expert-nav/expert-nav.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ExpertPageComponent } from './expert-page/expert-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    BrowserModule,
    AppComponent,
    LoginPageComponent,
    QuestionListComponent,
    ViewQuestionComponent,
    QuestionPreviewComponent,
    ResponseComponent,
    AskQuestionComponent,
    EnterResponseComponent,
    SelfTagsComponent,
    UserNavComponent,
    ExpertNavComponent,
    UserPageComponent,
    ExpertPageComponent,
    BrowserAnimationsModule,
    HttpClientModule
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
