import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first-componet.componet';
import { SecondComponentComponent } from './second-component/second-component.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule,
    CursosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
