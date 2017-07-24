import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TaxService } from './../../tax.service';
@Component({
  selector: 'app-button-tax',
  templateUrl: './button-tax.component.html',
  styleUrls: ['./button-tax.component.css']
})
export class ButtonTaxComponent implements OnInit {
  @Input() calculation;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private taxs: TaxService) { }
  caculate(article, price) {
    const iva = this.taxs.getTax1(price , this.calculation);
    const total = +price + iva;
    this.buttonClicked.emit({article , price, iva, total});
  }
  ngOnInit() {
  }

}
