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
  MatSnackBarModule,
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
    MatSnackBarModule,
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
    MatSnackBarModule,
  ],
})
export class MaterialImportModule {}
