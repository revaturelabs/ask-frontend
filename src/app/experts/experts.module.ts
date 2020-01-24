import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterResponseComponent } from './enter-response/enter-response.component';
import { MaterialImportModule } from '../../material-import/material-import.module';
import { SelfTagsComponent } from './self-tags/self-tags.component';
import { TagCreationComponent } from './tag-creation/tag-creation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import {LMarkdownEditorModule} from 'ngx-markdown-editor';
import {AppModule} from '../app.module';

@NgModule({
  declarations: [EnterResponseComponent, SelfTagsComponent, SettingsComponent],
  imports: [
    CommonModule,
    MaterialImportModule,
    SelfTagsComponent,
    TagCreationComponent,
    ReactiveFormsModule,
    FormsModule,
    LMarkdownEditorModule,
    AppModule,
  ],
})
export class ExpertsModule {}
