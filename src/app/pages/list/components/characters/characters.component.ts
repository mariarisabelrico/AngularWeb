import { Character } from 'src/app/core/services/models/character.models';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class charactersComponent implements OnInit {
  characters?: Array<Character>;
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {}
  character(){
    this.charactersService.get().subscribe((resp) => {
      this.characters = resp;

    });
  }

}
