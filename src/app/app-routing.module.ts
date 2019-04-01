import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadialComponent } from './graph/radial/radial.component';

const routes: Routes = [
  { path: '', component: RadialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
