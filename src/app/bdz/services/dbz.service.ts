import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 5000,
      id: uuid(),
    },
    {
      name: 'Goku',
      power: 10000,
      id: uuid(),
    },
    {
      name: 'Vegeta',
      power: 8000,
      id: uuid(),
    },
  ];

  addCharacter(character: Character): void {
    this.characters.push(character);
  }

  deleteCharacter(id: string): void {
    this.characters = this.characters.filter((character) => character.id !== id);
  }
}
