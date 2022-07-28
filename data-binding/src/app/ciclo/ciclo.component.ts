import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() valueInit: number = 10;

  constructor() {
    this.log('Constructor');
  }

  ngOnInit() {
    this.log('Init');
  }

  ngOnChanges() {
    this.log('OnChange');
  }

  ngDoCheck(): void {
    this.log('DoCheck');
  }

  ngAfterContentInit(): void {
    this.log('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.log('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('AfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('OnDestroy');
  }

  private log(hook: string) {
    console.log(hook)
  }

}
