import { TableCharactersComponent } from './table-characters/table-characters.component';
import { TablePlanetsComponent } from './table-planets/table-planets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableFilmsComponent } from './table-films/table-films.component';
import { TableStarshipsComponent } from './table-starships/table-starships.component';

const routes: Routes = [
  { path: '', redirectTo: '/personagens', pathMatch: 'full' },
  {
    path: 'filmes',
    component: TableFilmsComponent
  },
  {
    path: 'naves',
    component: TableStarshipsComponent
  },
  {
    path: 'planetas',
    component: TablePlanetsComponent
  },
  {
    path: 'personagens',
    component: TableCharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
