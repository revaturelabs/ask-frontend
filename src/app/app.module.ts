import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import {OverlayModule} from '@angular/cdk/overlay';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../app/shared/shared.module';
import { QuestionModule } from "../app/question/question.module";
import { ExpertsModule } from "../app/experts/experts.module";
import { UsersModule } from "../app/users/users.module";
import { TopicModule } from './topic/topic.module';

import { AuthService } from './services/auth/auth.service';

import { AuthGuard } from './services/auth/auth.guard';

import { AppComponent } from './app.component';
import { AskMeAnythingPageComponent } from './ask-me-anything/ask-me-anything-page/ask-me-anything-page.component';
import { MessageBoxComponent } from './ask-me-anything/message-box/message-box.component';
import { ChatMessageComponent } from './ask-me-anything/chat-message/chat-message.component';
import { ScheduleAmasessionComponent } from './static/schedule-amasession/schedule-amasession/schedule-amasession.component';
import { AmaScheduleComponent } from './ask-me-anything/ama-schedule/ama-schedule.component';
import { AmaEventComponent } from './ask-me-anything/ama-event/ama-event.component';
import { LoginPageComponent } from './static/login-page/login-page.component';
import { EditQuestionRouteComponent } from './users/edit-question-route/edit-question-route.component';
import { EditQuestionViewComponent } from './users/edit-question-view/edit-question-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AskMeAnythingPageComponent,
    MessageBoxComponent,
    ChatMessageComponent,
    ScheduleAmasessionComponent,
    AmaScheduleComponent,
    AmaEventComponent,
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
    MarkdownModule.forRoot(),
    OverlayModule,
    AngularDraggableModule,
  ],
  providers: [AuthGuard, ],
  bootstrap: [AppComponent],
  entryComponents: [    
    AskMeAnythingPageComponent
  ]
})
export class AppModule {}