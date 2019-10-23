import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatButtonModule, MatToolbarModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatToolbarModule, MatInputModule, MatOptionModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  exports: [MatMenuModule, MatButtonModule, MatToolbarModule, MatInputModule, MatOptionModule, MatSelectModule, FormsModule, ReactiveFormsModule]
})
export class MaterialImportModule { }