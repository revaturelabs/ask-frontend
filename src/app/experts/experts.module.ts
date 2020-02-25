import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfTagsComponent } from './self-tags/self-tags.component';
import { TagCreationComponent } from './tag-creation/tag-creation.component';
import { SettingsComponent } from './settings/settings.component';

import { SharedModule } from "../shared/shared.module";

import { ExpertsRoutingModule } from "./experts-routing.module";

@NgModule({
  declarations: [SelfTagsComponent, SettingsComponent, TagCreationComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExpertsRoutingModule
  ],
  exports:[
    SelfTagsComponent,
    TagCreationComponent,
    SettingsComponent
  ]
})
export class ExpertsModule {}