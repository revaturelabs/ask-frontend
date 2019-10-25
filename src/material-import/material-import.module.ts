import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MaterialImportModule { }
