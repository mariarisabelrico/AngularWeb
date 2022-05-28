import { Character } from './../../../../core/services/models/character.models';
import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/core/services/houses/houses.service';

@Component({
  selector: 'app-ravenclaw',
  templateUrl: './ravenclaw.component.html',
  styleUrls: ['./ravenclaw.component.scss']
})
export class RavenclawComponent implements OnInit {
  house: string = 'ravenclaw';
  characters?: Array<Character>;

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {}
  houseStudents() { this.housesService.get(this.house).subscribe((m) => {this.characters = m;});}

}
