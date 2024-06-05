import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Output()
  onDeleteCharacterChild: EventEmitter<Character> = new EventEmitter()

  //!: Para recibir una variable como una lista
  //!: desde un componente padre, pero no precisamente
  //!: La parte donde enviamos la lista es desde <dbz-list></dbz-list>
  @Input()
  public charactersList: Character[] = []

  emitDeleteCharacter(character: Character): void{
    console.log({character})
    this.onDeleteCharacterChild.emit(character)
  }

}
