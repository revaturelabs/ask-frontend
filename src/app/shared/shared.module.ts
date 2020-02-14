import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { MaterialImportModule } from '../../material-import/material-import.module';

import { FooterComponent } from './footer/footer.component';

import { SkilltagPipe } from './skilltag.pipe';


@NgModule({
  declarations: [
    FooterComponent,
    SkilltagPipe
  ],
  imports: [
    CommonModule,
    MaterialImportModule,
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    LMarkdownEditorModule,
    MaterialImportModule,
    SkilltagPipe,
    FooterComponent
  ]
})
export class SharedModule { }
