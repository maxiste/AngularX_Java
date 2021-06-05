import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioCandidatosService } from './servicio-candidatos.service';
import { BuscarCandidatosComponent } from './buscar-candidatos/buscar-candidatos.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarCandidatosComponent } from './listar-candidatos/listar-candidatos.component';
import { RouterModule, Routes } from '@angular/router';

let rutas:Routes=[
  {
    path: '',
    component:ListarCandidatosComponent
  },
  {
    path: 'toInicio',
    component:ListarCandidatosComponent
  },

  {
    path: 'listadoCandidatos',
    component:ListarCandidatosComponent
  },
  {
    path: 'toBuscarE',
    component:BuscarCandidatosComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    BuscarCandidatosComponent,
    ListarCandidatosComponent,
    PieComponent,
    CabeceraComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [ServicioCandidatosService],
  bootstrap: [AppComponent] //AppComponent seteado para cada vista
})
export class AppModule { }
