import { Component } from "@angular/core";

//Decorator para informar ao TS que aqui será um compoennte do angular
@Component({
  // Nome da tag html que será usada
  selector: 'first-component',
  template: `
    <p>My first component with Angular!</p>
  `
})

export class FirstComponent {

}