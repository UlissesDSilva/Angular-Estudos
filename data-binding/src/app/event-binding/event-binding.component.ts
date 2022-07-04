import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  txt: string = "";
  valueSave: string = "";
  isMouseOver: boolean = false;

  btn() {
    alert("Teste de eventos");
  }

  onKeyUp(event: KeyboardEvent) {
    this.txt = (<HTMLInputElement>event.target).value
  }

  save(event: any) {
    this.valueSave = event
  }

  isMouseOverOrOut(){
    this.isMouseOver = !this.isMouseOver
  }


  constructor() { }

  ngOnInit(): void {
  }

}
