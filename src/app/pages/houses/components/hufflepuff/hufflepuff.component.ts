import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/core/services/houses/houses.service';
import { Character } from 'src/app/core/services/models/character.models';

@Component({
  selector: 'app-hufflepuff',
  templateUrl: './hufflepuff.component.html',
  styleUrls: ['./hufflepuff.component.scss']
})
export class HufflepuffComponent implements OnInit {
  house: string = 'hufflepuff';
  characters?:Array<Character>;

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {}
    houseStudents() {
      this.housesService.get(this.house).subscribe((m) => {this.characters = m;});
    }
    
  }