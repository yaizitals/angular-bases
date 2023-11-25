import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="decreaseBy(1)">-1</button>
  <p></p>
  <button (click)="resetCounter()">Reset</button>
  `
})

export class CounterComponent {
  public counter:number = 10;
  //constructor() { }

  increaseBy(value: number):void{
    this.counter += value;
  }

  decreaseBy(value2:number):void{
    this.counter = this.counter-value2;
  }

  resetCounter(): void{
    this.counter=10;
  }

}
