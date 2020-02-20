import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { MaterialImportModule } from '../../material-import/material-import.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    LMarkdownEditorModule,
    MaterialImportModule
  ]
})
export class SharedModule { }
