import { CharactersService } from './../services/characters/characters.service';
import { CharacterModel, List } from './../model/model.interface';
import { Component, OnInit } from '@angular/core';
import { faAngleDoubleRight, faAngleDoubleLeft, faMagnifyingGlass, faEraser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table-characters',
  templateUrl: './table-characters.component.html',
  styleUrls: ['./table-characters.component.scss']
})
export class TableCharactersComponent implements OnInit {

  characters!: CharacterModel [];
  currentPage: number = 1;
  inputValue: string = '';
  next = faAngleDoubleRight;
  previous = faAngleDoubleLeft;
  search = faMagnifyingGlass;
  clear = faEraser;

  constructor(private charactersService : CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(currentPage: number = 1) {
    this.charactersService.getCharacters<List>(currentPage).subscribe(data => {
      this.characters = data.results;
    })
  }

  nextPage() {
    this.currentPage++;
    this.getCharacters(this.currentPage);
  }

  previousPage() {
    this.currentPage--;
    this.getCharacters(this.currentPage);
  }

  changeInputValue(event: string) {
    this.inputValue = event;
  }

  searchCharacterByName(name: string){
    if(name == '') {
      this.getCharacters(1)
      return;
    }
    this.charactersService.getCharacterByName<List>(name).subscribe(data => {
      this.characters = data.results
    })
  }

  clearSearch() {
    this.currentPage = 1;
    this.getCharacters();
  }

}
