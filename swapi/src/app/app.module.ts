import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TableFilmsComponent } from './table-films/table-films.component';
import { TableStarshipsComponent } from './table-starships/table-starships.component';
import { TableCharactersComponent } from './table-characters/table-characters.component';
import { TablePlanetsComponent } from './table-planets/table-planets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableFilmsComponent,
    TableStarshipsComponent,
    TableCharactersComponent,
    TablePlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
