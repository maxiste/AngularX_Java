import { PedidosComponent } from './pedidos/pedidos.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscarCandidatosComponent } from './buscar-candidatos/buscar-candidatos.component';


@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    BuscarCandidatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PedidosComponent]
})
export class AppModule { }
