import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div>
  <h3> Counter: {{ counter }} </h3>
  </div>
  <button (click)="incrementCounterBy(+1)" >+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="incrementCounterBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter:number = 10;


  incrementCounterBy(value: number){
    this.counter += value
  }
  resetCounter(){
    this.counter = 10;
  }
}
