import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule, 
  MatCardModule
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class MaterialImportModule { }
