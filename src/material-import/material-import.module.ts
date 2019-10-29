import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
  ],
})
export class MaterialImportModule {}
