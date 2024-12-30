import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  standalone: false,
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  cambiarNombre():void{
    this.name = 'Spiderman';
  }

  cambiarEdad():void{
    this.age = 20;
  }
  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }
  reset():void{
    this.name = 'Ironman';
    this.age = 45;
  }
}
