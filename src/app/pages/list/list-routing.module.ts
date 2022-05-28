import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listCharactersComponent } from './components/list-characters/list-characters.component';
const routes: Routes = [
  {
    path: '',
    component:listCharactersComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
