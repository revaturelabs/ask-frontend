import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterResponseComponent } from '../question/enter-response/enter-response.component';
import { SelfTagsComponent } from './self-tags/self-tags.component';
import { TagCreationComponent } from './tag-creation/tag-creation.component';
import { SettingsComponent } from './settings/settings.component';

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [EnterResponseComponent, SelfTagsComponent, SettingsComponent],
  imports: [
    CommonModule,
    SelfTagsComponent,
    TagCreationComponent,
    SharedModule
  ],
})
export class ExpertsModule {}
