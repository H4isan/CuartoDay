import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonTaxComponent } from './button-tax/button-tax.component';
import { TaxService} from './../tax.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ButtonTaxComponent],
  exports: [ButtonTaxComponent],
  providers: [TaxService]
})
export class SharedModule { }
