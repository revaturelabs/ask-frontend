import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../app/shared/shared.module';
import { QuestionModule } from "../app/question/question.module";
import { ExpertsModule } from "../app/experts/experts.module";
import { UsersModule } from "../app/users/users.module";

import { AuthService } from './services/auth/auth.service';

import { LoginPageComponent } from './static/login-page/login-page.component';
import { AppComponent } from './app.component';
import { ExpertQuestionsComponent } from './static/expert-questions/expert-questions.component';
import { AuthGuard } from './services/auth/auth.guard';
import { UserQuestionsComponent } from './static/user-questions/user-questions.component';
import { NavbarComponent } from "./static/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ExpertQuestionsComponent,
    UserQuestionsComponent,
    NavbarComponent
  ],
  imports: [
    SharedModule,
    ExpertsModule,
    UsersModule,
    BrowserModule,
    AppRoutingModule,
    QuestionModule,
    MarkdownModule.forRoot(),
  ],
  providers: [AuthGuard, ],
  bootstrap: [AppComponent],
})
export class AppModule {}