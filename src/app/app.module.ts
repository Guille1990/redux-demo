import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// angular/material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExportModule } from './material-export/material-export.module';
import { FatherComponent } from './components/father/father.component';
import { ChildComponent } from './components/child/child.component';
import { GrandchildComponent } from './components/grandchild/grandchild.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    ChildComponent,
    GrandchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
