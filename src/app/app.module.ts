import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../app/shared/shared.module';
import { QuestionModule } from "../app/question/question.module";

import { AuthService } from './services/auth/auth.service';

import { LoginPageComponent } from './static/login-page/login-page.component';
import { AskQuestionComponent } from './users/ask-question/ask-question.component';
import { SelfTagsComponent } from './experts/self-tags/self-tags.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './static/navbar/navbar.component';
import { AuthGuard } from './services/auth/auth.guard';
import { TagCreationComponent } from './experts/tag-creation/tag-creation.component';
import { SettingsComponent } from './experts/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AskQuestionComponent,
    SelfTagsComponent,
    NavbarComponent,
    TagCreationComponent,
    SettingsComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuestionModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
