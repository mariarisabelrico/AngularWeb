import { HousesService } from 'src/app/core/services/houses/houses.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/services/models/character.models';

@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.component.html',
  styleUrls: ['./gryffindor.component.scss']
})
export class GryffindorComponent implements OnInit {
  house: string = 'gryffindor';
  characters?: Array<Character>;

  constructor(private housesService: HousesService) {}
  
  ngOnInit(): void {}
    houseStudents() {
      this.housesService.get(this.house).subscribe((m) => {this.characters = m;});
    }
    
  }

  
