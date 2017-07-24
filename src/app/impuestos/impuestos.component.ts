import { Component, OnInit, Input } from '@angular/core';

import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-impuestos',
  templateUrl: './impuestos.component.html',
  styleUrls: ['./impuestos.component.css']
})
export class ImpuestosComponent implements OnInit {
   valor: any[] = [];

  firstIva = .19;
  secondIva = .16;

  ngOnInit() {
  }
  clickRecivedFromSon(value: any) {
    console.log(value);
    this.valor.push(value);
    console.log(this.valor);
  }
}
