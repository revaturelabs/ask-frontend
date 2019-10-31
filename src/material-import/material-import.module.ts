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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';


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
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCheckboxModule,

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
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCheckboxModule,

  ],
})
export class MaterialImportModule {}
