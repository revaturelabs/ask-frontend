import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [CommonModule, MatMenuModule, MatButtonModule],
  exports: [MatMenuModule, MatButtonModule]
})
export class MaterialImportModule { }
