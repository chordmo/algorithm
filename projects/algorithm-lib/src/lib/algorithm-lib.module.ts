import { NgModule } from '@angular/core';
import { AlgorithmLibComponent } from './algorithm-lib.component';
import { Radial } from './graph/radial';

@NgModule({
  declarations: [AlgorithmLibComponent, Radial],
  imports: [
  ],
  exports: [AlgorithmLibComponent, Radial]
})
export class AlgorithmLibModule { }
