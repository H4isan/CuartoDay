import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpuestosComponent } from './../impuestos/impuestos.component';
import {SharedModule} from './../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ImpuestosComponent],
  exports: [ImpuestosComponent]
})
export class ImpuestosModule { }
