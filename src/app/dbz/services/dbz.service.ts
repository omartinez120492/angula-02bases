
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Krilin',
      power: 500,
    }, {
      id: uuidv4(),
      name: 'Goku',
      power: 10000
    }, {
      id: uuidv4(),
      name: 'Vegueta',
      power: 9900
    }
  ]

  addCharacter(character: Character): void {
    character.id = uuidv4()
    this.characters.push(character);
  }

  onDeleteCharacterMain(character: Character): void {
    console.log('Padre', { character })
    this.characters = this.characters.filter((i) => i.id !== character.id)
  }

}
