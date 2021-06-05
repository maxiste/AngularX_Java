import { Candidato, ServicioCandidatosService } from './../servicio-candidatos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-candidatos',
  templateUrl: './listar-candidatos.component.html'
})
export class ListarCandidatosComponent implements OnInit {

  public idCan
  public mCandidato:boolean = false
  public listaC:Candidato[]

  constructor(private eliminarSCandidato:ServicioCandidatosService,
    private mostrarCandidato:ServicioCandidatosService) { }

  ngOnInit(): void {
  }
  public deleteCandidato(idCandidato:number){
    this.eliminarSCandidato.eliminarCandidato(idCandidato)
    .subscribe(data=>this.listaC=data)
      this.mCandidato=true;

    }

    public listarCandidatos(){
      this.mostrarCandidato.listaCandidatos()
      .subscribe(data=>this.listaC=data)
      this.mCandidato=true;

    }
}
