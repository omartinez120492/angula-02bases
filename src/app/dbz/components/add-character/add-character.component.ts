import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
//!: Emisor de evento hacia el padre, para agregar un personaje
  @Output()
  onNewCharacterChild: EventEmitter<Character>= new EventEmitter();

  public character: Character = {
    id: '0',
    name: '',
    power: 0
  }


  emitCharacter(): void {
    //? Si no tiene nombre no pasa
    if (this.character.name.length === 0) return;
    this.onNewCharacterChild.emit({... this.character}) //!: Enviamos el evento al padre
    this.character = {id: '',name:'', power: 0}
  }

}
