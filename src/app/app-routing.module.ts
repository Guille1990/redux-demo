import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FatherComponent } from './components/father/father.component';

const routes: Routes = [
  { path: '', component: FatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
