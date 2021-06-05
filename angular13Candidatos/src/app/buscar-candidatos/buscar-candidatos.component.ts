
import { Candidato, ServicioCandidatosService } from './../servicio-candidatos.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-buscar-candidatos',
  templateUrl: './buscar-candidatos.component.html'
})
export class BuscarCandidatosComponent {

  public email:string
  public idCan:string
  public mostrarC:boolean = false
  public resultadoC:Candidato
    constructor(private buscadorxCorreo:ServicioCandidatosService,
                ) { }


public buscarCandidato(){
  this.buscadorxCorreo.getResultado(this.email)
  .subscribe(data=>this.resultadoC=data);

  this.mostrarC = true;

}

}
