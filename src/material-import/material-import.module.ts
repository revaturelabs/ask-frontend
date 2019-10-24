import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatButtonModule, MatToolbarModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatChipsModule } from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatToolbarModule, MatInputModule, MatOptionModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatChipsModule, MatAutocompleteModule, MatCheckboxModule, MatIconModule, MatButtonToggleModule],
  exports: [MatMenuModule, MatButtonModule, MatToolbarModule, MatInputModule, MatOptionModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatChipsModule, MatAutocompleteModule, MatCheckboxModule, MatIconModule, MatButtonToggleModule]
})
export class MaterialImportModule { }