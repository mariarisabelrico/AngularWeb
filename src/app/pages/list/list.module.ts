import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { charactersComponent} from './components/characters/characters.component';
import { listCharactersComponent } from './components/list-characters/list-characters.component';
import { SearchCharactersComponent } from './components/search-characters/search-characters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    charactersComponent,
    listCharactersComponent,
    SearchCharactersComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ReactiveFormsModule,   
    FormsModule

  ]
})
export class ListModule { }
