import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/Character';

@Component({
  selector: 'app-list-dbz',
  standalone: false,

  templateUrl: './list-dbz.component.html',
  styleUrl: './list-dbz.component.css'
})
export class ListDBZComponent {
  @Input() // Decorador para recibir datos desde el componente padre
  public characterList: Character[] = [];

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id: string): void {
    this.onDeleteCharacter.emit(id);
  }
}
