import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  standalone: false,
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  public counter: number = 10;

  incremmentar() {
    this.counter += 1;
  }

  decrementar() {
    this.counter -= 1;
  }
  reset() {
    this.counter = 10;
  }
}
