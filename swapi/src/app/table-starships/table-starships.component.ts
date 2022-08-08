import { StarshipService } from './../services/starship/starship.service';
import { Component, OnInit } from '@angular/core';
import { List, StarshipModel } from '../model/model.interface';
import { faAngleDoubleLeft, faAngleDoubleRight, faMagnifyingGlass, faEraser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table-starships',
  templateUrl: './table-starships.component.html',
  styleUrls: ['./table-starships.component.scss']
})
export class TableStarshipsComponent implements OnInit {

  starships!: StarshipModel [];
  currentPage: number = 1;
  inputValue: string = '';
  next = faAngleDoubleRight;
  previous = faAngleDoubleLeft;
  search = faMagnifyingGlass;
  clear = faEraser;

  constructor(private starshipService: StarshipService) { }

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships(currentPage: number = 1) {
    this.starshipService.getStarships<List>(currentPage).subscribe(data => {
      this.starships = data.results;
    })
  }

  nextPage() {
    this.currentPage++;
    this.getStarships(this.currentPage);
  }

  previousPage() {
    this.currentPage--;
    this.getStarships(this.currentPage);
  }

  changeInputValue(event: string) {
    this.inputValue = event;
  }

  searchStarshipByName(name: string){
    if(name == '') {
      this.getStarships(1)
      return;
    }
    this.currentPage = 1;
    this.starshipService.getStarshipByName<List>(name).subscribe(data => {
      this.starships = data.results
    })
  }

  clearSearch() {
    this.currentPage = 1;
    this.getStarships();
  }

}
