import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'count',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor =  new EventEmitter()

  somar() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  subtrair() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
