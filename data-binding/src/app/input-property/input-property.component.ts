import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: ['level']
})
export class InputPropertyComponent implements OnInit {

  //Externamente podemos usar curso como o nome da variável
  @Input('curso') nomeCurso: string = '';
  level: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
