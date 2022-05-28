import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/core/services/houses/houses.service';
import { Character } from 'src/app/core/services/models/character.models';

@Component({
  selector: 'app-slytherin',
  templateUrl: './slytherin.component.html',
  styleUrls: ['./slytherin.component.scss']
})
export class SlytherinComponent implements OnInit {
  house: string = 'slytherin';
  characters?: Array<Character>;

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {}
  houseStudents(){
    this.housesService.get(this.house).subscribe((m) => {
      this.characters = m;});
  }

}
