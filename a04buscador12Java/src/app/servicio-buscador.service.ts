import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Resultado {
  url: string;
  // titulo: string;
  descripcion: string;

}

@Injectable() //
export class ServicioBuscadorService {
//se quita esta url porqu se trabajr del directamente elicpse
 // private url = "http://localhost:8081/12_buscador_AJAX_AngularJS_Backend/buscar";
 private url ="buscar"
  constructor(private http: HttpClient) { }
  getResultado(t: string) {
    return this.http.get<Resultado[]>(this.url, { params: { tema: t } });
  }
}


