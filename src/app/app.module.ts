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
import { TopicPageComponent } from './static/choose-topic-page/topic-page.component';
import { SpecificTagInfoComponent } from './static/view-topic/specific-tag-info.component';
import { TopicExpertsComponent } from './static/topic-experts/topic-experts.component';
import { TopicQuestionsComponent } from './static/topic-questions/topic-questions.component';
import { AskMeAnythingPageComponent } from './ask-me-anything/ask-me-anything-page/ask-me-anything-page.component';
import { MessageBoxComponent } from './ask-me-anything/message-box/message-box.component';
import { ChatMessageComponent } from './ask-me-anything/chat-message/chat-message.component';
import { ScheduleAmasessionComponent } from './static/schedule-amasession/schedule-amasession/schedule-amasession.component';
import { AmaScheduleComponent } from './ask-me-anything/ama-schedule/ama-schedule.component';
import { AmaEventComponent } from './ask-me-anything/ama-event/ama-event.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TopicPageComponent,
    SpecificTagInfoComponent,
    TopicExpertsComponent,
    TopicQuestionsComponent,
    AskMeAnythingPageComponent,
    MessageBoxComponent,
    ChatMessageComponent,
    ScheduleAmasessionComponent,
    AmaScheduleComponent,
    AmaEventComponent,
  ],
  imports: [
    SharedModule,
    ExpertsModule,
    UsersModule,
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