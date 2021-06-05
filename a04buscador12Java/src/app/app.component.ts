import { ServicioBuscadorService } from './servicio-buscador.service';
import { Component } from '@angular/core';
import {Resultado} from './servicio-buscador.service'

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html'
  })

   export class AppComponent {
     titulo="Lista de resultados";
     tema:string;
     resultado:Resultado[];
      constructor(private buscador:ServicioBuscadorService){}

      buscar(){ //el resultado de la llamada al método del servicio es un observable //al que debemos suscribirnos e indicar que hay que hacer cuando esté //disponible el resultado
        this.buscador.getResultado(this.tema)
        .subscribe(data=>this.resultado=data);
      }
    }
