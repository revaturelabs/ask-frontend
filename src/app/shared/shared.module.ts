import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { MaterialImportModule } from '../../material-import/material-import.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';

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
    NgbModule,
    MarkdownModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    LMarkdownEditorModule,
    MaterialImportModule,
    SkilltagPipe,
    FooterComponent,
    NgbModule,
    MarkdownModule
  ]
})
export class SharedModule { }
