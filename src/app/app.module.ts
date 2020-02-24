import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../app/shared/shared.module';
import { QuestionModule } from "../app/question/question.module";
import { ExpertsModule } from "../app/experts/experts.module";
import { UsersModule } from "../app/users/users.module";

import { AuthService } from './services/auth/auth.service';

import { LoginPageComponent } from './static/login-page/login-page.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
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