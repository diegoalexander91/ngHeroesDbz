import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';
import { HeroesModule } from './Heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, contadorModule, HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
