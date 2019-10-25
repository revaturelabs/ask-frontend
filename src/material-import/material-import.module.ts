import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from "@angular/material";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class MaterialImportModule {}
