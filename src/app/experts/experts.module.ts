import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertNavComponent } from './expert-nav/expert-nav.component';
import { ExpertPageComponent } from './expert-page/expert-page.component';
import { EnterResponseComponent } from './enter-response/enter-response.component';
import { MaterialImportModule } from '../../material-import/material-import.module';
import { SelfTagsComponent } from './self-tags/self-tags.component';
import { TagCreationComponent } from './tag-creation/tag-creation.component';

@NgModule({
  declarations: [
    ExpertNavComponent,
    ExpertPageComponent,
    EnterResponseComponent,
    SelfTagsComponent,
    TagCreationComponent,
  ],
  imports: [CommonModule, MaterialImportModule, SelfTagsComponent],
})
export class ExpertsModule {}
