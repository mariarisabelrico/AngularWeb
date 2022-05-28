import { SlytherinComponent } from './components/slytherin/slytherin.component';
import { RavenclawComponent } from './components/ravenclaw/ravenclaw.component';
import { HufflepuffComponent } from './components/hufflepuff/hufflepuff.component';
import { GryffindorComponent } from './components/gryffindor/gryffindor.component';
import { HousesComponent } from './components/houses/houses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';


@NgModule({
  declarations: [
    HousesComponent,
    GryffindorComponent,
    HufflepuffComponent,
    RavenclawComponent,
    SlytherinComponent
  ],
  imports: [
    CommonModule,
    HousesRoutingModule

  ],
})
export class HousesModule { }
