import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterResponseComponent } from './enter-response/enter-response.component';
import { MaterialImportModule } from '../../material-import/material-import.module';
import { SelfTagsComponent } from './self-tags/self-tags.component';

@NgModule({
  declarations: [
    EnterResponseComponent,
    SelfTagsComponent,
  ],
  imports: [CommonModule, MaterialImportModule, SelfTagsComponent],
})
export class ExpertsModule {}
