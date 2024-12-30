import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroes: string[] = ['Batman', 'Superman', 'Spiderman'];

  deletLastHero():void{
    this.heroes.pop();
  }
}
