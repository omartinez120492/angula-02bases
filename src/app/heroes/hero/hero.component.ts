import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-heroes',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironMan';
  public ege: number  = 45;
  //? One way data binding

  get capitalizeName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.ege}`;
  }

  changeName(newName:string): void{
    this.name = newName;
  }

  changeEge(newEge: number):void{
    this.ege = newEge;
  }

  resetData():void {
    this.name = 'ironMan';
    this.ege = 45;
  }

}
