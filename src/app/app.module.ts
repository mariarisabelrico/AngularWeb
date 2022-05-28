import { HttpClientModule } from '@angular/common/http';
import { coreModule } from './core/core.module';
import { NgModule,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule ({
  declarations: [
    AppComponent,
           
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    coreModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
         
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
