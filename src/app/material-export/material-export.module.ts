import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';

const MODULES = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialExportModule { }
