import { CharactersService } from './../../../../core/services/characters/characters.service';
import { Character } from './../../../../core/services/models/character.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-characters',
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.scss']
})
export class SearchCharactersComponent implements OnInit {
  nameCharacter ='';
  characters?: Array<Character>;  
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {}
  character (){
    this.charactersService.get().subscribe((resp) => {
      this.characters = resp;
    });
  }

  search(){
    this.charactersService.get().subscribe((resp) => {
      this.characters = resp.filter((c) =>
      c.name.toUpperCase().trim().includes(this.nameCharacter.toUpperCase().trim())
      )
    });
  }

}
