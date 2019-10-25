import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatCheckboxModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
  ],
})
export class MaterialImportModule {}
