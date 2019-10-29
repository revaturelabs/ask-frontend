import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

import { 
=======
import {
>>>>>>> origin/dev
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
<<<<<<< HEAD
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
=======
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatCheckboxModule
>>>>>>> origin/dev
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

<<<<<<< HEAD
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

=======
>>>>>>> origin/dev
@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
<<<<<<< HEAD
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonToggleModule
=======
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
>>>>>>> origin/dev
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
<<<<<<< HEAD
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonToggleModule
  ]

})
export class MaterialImportModule { }
=======
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule
  ],
})
export class MaterialImportModule {}
>>>>>>> origin/dev
