import { Injectable } from '@angular/core';

@Injectable()
export class TaxService {
  getTax1(cash: number, iva) {
    return cash * +iva;
  }

  constructor() { }

}
