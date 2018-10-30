import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

const MODULES = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialExportModule { }
