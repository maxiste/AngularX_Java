import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { App } from './app.calculadora/app.calculadora.component';
import { App } from './app.calcualdora/app.calcualdora.component';

@NgModule({
  declarations: [
    AppComponent,
    App.CalculadoraComponent,
    App.CalcualdoraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
