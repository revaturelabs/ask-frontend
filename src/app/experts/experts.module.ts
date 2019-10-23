import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertNavComponent } from './expert-nav/expert-nav.component';
import { ExpertPageComponent } from './expert-page/expert-page.component';
import { EnterResponseComponent } from './enter-response/enter-response.component';
import { MaterialImportModule } from '../../material-import/material-import.module';



@NgModule({
  declarations: [
    ExpertNavComponent,
    ExpertPageComponent,
    EnterResponseComponent,
  ],
  imports: [
    CommonModule,
    MaterialImportModule,
  ]
})
export class ExpertsModule { }
