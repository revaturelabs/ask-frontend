import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";

import { ScheduleAmasessionComponent } from './schedule-amasession/schedule-amasession/schedule-amasession.component';
import { MessageBoxComponent } from './ask-me-anything/message-box/message-box.component';
import { ChatMessageComponent } from './ask-me-anything/chat-message/chat-message.component';
import { AskMeAnythingPageComponent } from './ask-me-anything/ask-me-anything-page/ask-me-anything-page.component';
import { AmaScheduleComponent } from './ask-me-anything/ama-schedule/ama-schedule.component';
import { AmaEventComponent } from './ask-me-anything/ama-event/ama-event.component';


@NgModule({
  declarations: [
    ScheduleAmasessionComponent,
    MessageBoxComponent,
    ChatMessageComponent,
    AskMeAnythingPageComponent,
    AmaScheduleComponent,
    AmaEventComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ScheduleAmasessionComponent,
    MessageBoxComponent,
    ChatMessageComponent,
    AskMeAnythingPageComponent,
    AmaScheduleComponent,
    AmaEventComponent
  ]
})
export class AmaModule { }