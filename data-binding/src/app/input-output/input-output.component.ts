import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  nomeCurso: string = 'Angular';
  level: string = 'Médio';

  valorInicial: number = 15;

  onMudouValor(event: any) {
    console.log(event.novoValor)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
