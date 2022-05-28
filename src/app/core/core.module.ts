import {  HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { footerComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    footerComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
    
    
  ],

  providers: [
    footerComponent,
    HeaderComponent,
    
  ],
  exports: [
    HeaderComponent,
    footerComponent,
  
  
  ]


})
export class coreModule {
  
 }
