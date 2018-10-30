import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule
} from '@angular/material';

const MODULES = [
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialExportModule { }
