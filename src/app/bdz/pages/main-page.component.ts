import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/Character';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private readonly dbzService: DbzService) {}

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacter(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
