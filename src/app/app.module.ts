import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NavbarComponent} from '../app/static/navbar/navbar.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { QuestionListComponent } from './static/question-list/question-list.component';
import { PreviewQuestionComponent } from './static/preview-question/preview-question.component';
import { ViewQuestionComponent } from './static/view-question/view-question.component';
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
import { FooterComponent } from './static/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    QuestionListComponent,
    PreviewQuestionComponent,
    ViewQuestionComponent,
    AskQuestionComponent,
    EnterResponseComponent,
    SelfTagsComponent,
    UserNavComponent,
    ExpertNavComponent,
    routingComponents,
    PostFormComponent,
    PostsComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialImportModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
