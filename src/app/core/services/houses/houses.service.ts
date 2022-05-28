import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character.models';


@Injectable({
  providedIn: 'root'
})
export class HousesService {
  

  constructor( private http: HttpClient) { }
  get(house: string) { return this.http.get<Array<Character>>(`${environment.url_api}${environment.studentHouse}` + house);}
}
