import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create-character',
  standalone: false,
  templateUrl: './create-character.component.html',
  styleUrl: './create-character.component.css',
})
export class CreateCharacterComponent {
  @Output() // Decorador para enviar datos al componente padre
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
    id: uuid(),
  };

  addCharacter() {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = {
      name: '',
      power: 0,
      id: uuid(),
    };
  }
}
