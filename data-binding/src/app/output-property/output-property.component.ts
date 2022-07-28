import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'count',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor =  new EventEmitter()

  @ViewChild('campoInput') campoValorInput: ElementRef | undefined;

  somar() {
    console.log(this.campoValorInput?.nativeElement.value);
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
