import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../app/shared/shared.module';

import { AuthService } from './services/auth/auth.service';


import { LoginPageComponent } from './static/login-page/login-page.component';
import { QuestionListComponent } from './static/question-list/question-list.component';
import { PreviewQuestionComponent } from './static/preview-question/preview-question.component';
import { ViewQuestionComponent } from './static/view-question/view-question.component';
import { QuestionComponent } from './static/question/question.component';
import { ResponseComponent } from './static/response/response.component';
import { AskQuestionComponent } from './users/ask-question/ask-question.component';
import { EnterResponseComponent } from './experts/enter-response/enter-response.component';
import { SelfTagsComponent } from './experts/self-tags/self-tags.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './static/navbar/navbar.component';
import { FooterComponent } from './static/footer/footer.component';
import { HighlightedResponseComponent } from '../app/static/highlighted-response/highlighted-response.component';
import { QuestionFilterComponent } from './static/question-filter/question-filter.component';
import { AuthGuard } from './services/auth/auth.guard';
import { TagCreationComponent } from './experts/tag-creation/tag-creation.component';
import { SettingsComponent } from './experts/settings/settings.component';
import { FilteredQuestionListComponent } from './static/filtered-question-list/filtered-question-list.component';
import { ExpertQuestionsComponent } from './static/expert-questions/expert-questions.component';
import { UserQuestionsComponent } from './static/user-questions/user-questions.component';
import { SkilltagPipe } from './static/response/skilltag.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopicPageComponent } from './static/choose-topic-page/topic-page.component';
import { SpecificTagInfoComponent } from './static/view-topic/specific-tag-info.component';
import { TopicExpertsComponent } from './static/topic-experts/topic-experts.component';
import { TopicQuestionsComponent } from './static/topic-questions/topic-questions.component';
import { AskMeAnythingPageComponent } from './ask-me-anything/ask-me-anything-page/ask-me-anything-page.component';
import { MessageBoxComponent } from './ask-me-anything/message-box/message-box.component';
import { ChatMessageComponent } from './ask-me-anything/chat-message/chat-message.component';
import { QuestionRouteComponent } from './static/question-route/question-route.component';
import { 
  ScheduleAmasessionComponent } from './static/schedule-amasession/schedule-amasession/schedule-amasession.component';
import { AmaScheduleComponent } from './ask-me-anything/ama-schedule/ama-schedule.component';
import { AmaEventComponent } from './ask-me-anything/ama-event/ama-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    QuestionListComponent,
    PreviewQuestionComponent,
    ViewQuestionComponent,
    QuestionComponent,
    ResponseComponent,
    AskQuestionComponent,
    EnterResponseComponent,
    SelfTagsComponent,
    NavbarComponent,
    FooterComponent,
    HighlightedResponseComponent,
    QuestionFilterComponent,
    TagCreationComponent,
    SettingsComponent,
    FilteredQuestionListComponent,
    ExpertQuestionsComponent,
    UserQuestionsComponent,
    SkilltagPipe,
    TopicPageComponent,
    SpecificTagInfoComponent,
    TopicExpertsComponent,
    TopicQuestionsComponent
    AskMeAnythingPageComponent,
    MessageBoxComponent,
    ChatMessageComponent,
    QuestionRouteComponent,
    ScheduleAmasessionComponent,
    AmaScheduleComponent,
    AmaEventComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    NgbModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
