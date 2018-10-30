import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule } from '@angular/material';

const MODULES = [
  MatToolbarModule,
  MatCardModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialExportModule { }
