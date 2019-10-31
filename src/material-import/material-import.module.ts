import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material';
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
<<<<<<< HEAD
    MatFormFieldModule,
    MatInputModule,
=======
    MatIconModule,
    MatButtonToggleModule,
>>>>>>> dev
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
<<<<<<< HEAD
    MatFormFieldModule,
    MatInputModule,
=======
    MatIconModule,
    MatButtonToggleModule,
>>>>>>> dev
  ],
})
export class MaterialImportModule {}
