import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FatherComponent } from './components/father/father.component';
import { ChildComponent } from './components/child/child.component';
import { GrandchildComponent } from './components/grandchild/grandchild.component';
import { MaterialExportModule } from './material-export/material-export.module';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialExportModule
  ],
  declarations: [
    FatherComponent,
    ChildComponent,
    GrandchildComponent
  ]
})
export class DemoModule { }
