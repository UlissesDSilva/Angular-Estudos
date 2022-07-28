import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valueInit: number = 5;
  deletarCiclo: boolean = false;
  title = 'App Works';

  changeValue() {
    this.valueInit++;
  }

  destruir() {
    this.deletarCiclo = true;
  }
}
