import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../app/shared/shared.module';
import { QuestionModule } from "../app/question/question.module";
import { ExpertsModule } from "../app/experts/experts.module";
import { UsersModule } from "../app/users/users.module";
import { TopicModule } from './topic/topic.module';
import { AmaModule } from "./ama/ama.module";

import { AuthService } from './services/auth/auth.service';

import { AuthGuard } from './services/auth/auth.guard';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './static/page-not-found/page-not-found.component';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { EditQuestionRouteComponent } from './users/edit-question-route/edit-question-route.component';
import { EditQuestionViewComponent } from './users/edit-question-view/edit-question-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    EditQuestionRouteComponent,
    EditQuestionViewComponent
  ],
  imports: [
    SharedModule,
    ExpertsModule,
    UsersModule,
    TopicModule,
    BrowserModule,
    AppRoutingModule,
    QuestionModule,
    AmaModule,
    MarkdownModule.forRoot(),
  ],
  providers: [AuthGuard, ],
  bootstrap: [AppComponent],
  entryComponents: [    
    
  ]
})
export class AppModule {}