import { RavenclawComponent } from './components/ravenclaw/ravenclaw.component';
import { HufflepuffComponent } from './components/hufflepuff/hufflepuff.component';
import { SlytherinComponent } from './components/slytherin/slytherin.component';
import { GryffindorComponent } from './components/gryffindor/gryffindor.component';
import { HousesComponent } from './components/houses/houses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HousesComponent
  },
  {
    path:'gryffindor',
    component:GryffindorComponent
  },
  {
    path:'slytherin',
    component:SlytherinComponent
  },
  {
    path:'hufflepuff',
    component:HufflepuffComponent
  },
  {
    path:'raveclaw',
    component:RavenclawComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesRoutingModule { }
