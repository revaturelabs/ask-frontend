import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatToolbarModule],
  exports: [MatMenuModule, MatButtonModule, MatToolbarModule]
})
export class MaterialImportModule { }
