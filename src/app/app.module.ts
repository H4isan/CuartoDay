import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ImpuestosModule} from './impuestos/impuestos.module';
import {TaxService} from './tax.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImpuestosModule
  ],
  providers: [TaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
