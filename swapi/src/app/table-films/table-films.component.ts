import { FilmsService } from './../services/films/films.service';
import { FilmModel, List } from '../model/model.interface';
import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faEraser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'table-films',
  templateUrl: './table-films.component.html',
  styleUrls: ['./table-films.component.scss']
})
export class TableFilmsComponent implements OnInit {

  films!: FilmModel[];
  inputValue: string = '';
  search = faMagnifyingGlass
  clear = faEraser;

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.filmsService.getFilms<List>().subscribe( data => {
      this.films = data.results;
    })
  }

  changeInputValue(event: string) {
    this.inputValue = event;
  }

  searchFilmByName(name: string){
    if(name == '') {
      this.getFilms()
      return;
    }
    this.filmsService.getFilmByName<List>(name).subscribe(data => {
      this.films = data.results
    })
  }
}
