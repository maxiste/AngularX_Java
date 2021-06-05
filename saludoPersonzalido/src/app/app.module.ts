import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {  AppCalculadoraComponent } from './app.calculadora/app.calculadora.component';
import { ListadoComponent } from './listado/listado.component';
import { MiniBuscadorComponent } from './mini-buscador/mini-buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCalculadoraComponent,
    ListadoComponent,
    MiniBuscadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [MiniBuscadorComponent] //AppCalculadoraComponent
})
export class AppModule { }
