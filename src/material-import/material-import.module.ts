import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatMenuModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
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
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonToggleModule,
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonToggleModule,
  ],
})
export class MaterialImportModule {}
