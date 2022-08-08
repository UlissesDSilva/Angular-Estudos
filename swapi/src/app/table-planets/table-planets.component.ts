import { PlanetsService } from './../services/planets/planets.service';
import { PlanetModel, List } from './../model/model.interface';
import { Component, OnInit } from '@angular/core';
import { faAngleDoubleRight, faAngleDoubleLeft, faMagnifyingGlass, faEraser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table-planets',
  templateUrl: './table-planets.component.html',
  styleUrls: ['./table-planets.component.scss']
})
export class TablePlanetsComponent implements OnInit {

  planets!: PlanetModel [];
  currentPage: number = 1;
  inputValue: string = '';
  next = faAngleDoubleRight;
  previous = faAngleDoubleLeft;
  search = faMagnifyingGlass;
  clear = faEraser;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(currentPage: number = 1) {
    this.planetsService.getPlanets<List>(currentPage).subscribe(data => {
      this.planets = data.results;
    })
  }

  nextPage() {
    this.currentPage++;
    this.getPlanets(this.currentPage);
  }

  previousPage() {
    this.currentPage--;
    this.getPlanets(this.currentPage);
  }

  changeInputValue(event: string) {
    this.inputValue = event;
  }

  searchPlanetByName(name: string){
    debugger
    if(name == '') {
      this.getPlanets()
      return;
    }
    this.planetsService.getPlanetByName<List>(name).subscribe(data => {
      this.planets = data.results
    })
  }

  clearSearch(){
    this.currentPage = 1
    this.getPlanets();
  }

}
