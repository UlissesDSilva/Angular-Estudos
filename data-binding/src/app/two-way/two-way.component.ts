import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  nome: string = 'abc';

  pessoa = {
    nome: '',
    idade: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
