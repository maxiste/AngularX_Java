import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Candidato{
idc:number
 nombre:string;
 edad:number;
 correo:string;
 puesto:string;

}

@Injectable()
export class ServicioCandidatosService {
private url ="http://localhost:8081/13_candidatos_SpringService_AJAX_FrontAngularBackJavaX/"

constructor(private http:HttpClient) {

 }

public getResultado(correoObtenido:string){
  return this.http.get<Candidato>(this.url+"buscarCandidato",{params:{email:correoObtenido}});
   }

   public eliminarCandidato(idCandidato){
    return this.http.get<Candidato[]>(this.url+"eliminarCan",{params:{idCandidato:idCandidato}});
     }

    public listaCandidatos(){
      return this.http.get<Candidato[]>(this.url+"listarCan")
    }

}
