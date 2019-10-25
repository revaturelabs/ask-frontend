import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { QuestionListComponent } from './static/question-list/question-list.component';
import { ViewQuestionComponent } from './static/view-question/view-question.component';
import { QuestionComponent } from './static/question/question.component';
import { ResponseComponent } from './static/response/response.component';
import { AskQuestionComponent } from './users/ask-question/ask-question.component';
import { EnterResponseComponent } from './experts/enter-response/enter-response.component';
import { SelfTagsComponent } from './experts/self-tags/self-tags.component';
import { UserNavComponent } from './users/user-nav/user-nav.component';
import { ExpertNavComponent } from './experts/expert-nav/expert-nav.component';
import { MaterialImportModule } from '../material-import/material-import.module';
import { PostFormComponent} from './post-form/post-form.component';
import { PostsComponent} from './posts/posts.component';
import { HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './static/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    QuestionListComponent,
    ViewQuestionComponent,
    QuestionComponent,
    ResponseComponent,
    AskQuestionComponent,
    EnterResponseComponent,
    SelfTagsComponent,
    UserNavComponent,
    ExpertNavComponent,
    routingComponents,
    PostFormComponent,
    PostsComponent,
    NavbarComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
