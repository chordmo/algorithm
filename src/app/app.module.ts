import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Radial } from 'projects/algorithm-lib/src/lib/graph/radial';
import { RadialComponent } from './graph/radial/radial.component';

@NgModule({
  declarations: [
    AppComponent,
    RadialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
