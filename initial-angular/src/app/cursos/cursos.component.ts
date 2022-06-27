import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{

  link: string = "http://loiane.training";
  cursos: string[];

  constructor(private cursosService: CursosService) {

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(){
  }
}
