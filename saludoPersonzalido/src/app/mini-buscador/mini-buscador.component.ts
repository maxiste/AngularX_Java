import { Component, OnInit } from '@angular/core';

class Persona{

  public nombre      : string = null
  public email       : string = null
  public edad        : number = null

}
@Component({
  selector: 'app-mini-buscador',
  templateUrl: './mini-buscador.component.html'
})
export class MiniBuscadorComponent implements OnInit {
  public nombre:string
  persona:Persona;
  constructor() {
    this.persona=new Persona()
   }

  ngOnInit(): void {
  }

public buscar(){
  this.persona.nombre=this.nombre
  this.persona.email="max@gmil.com"
  this.persona.edad=20
}

}
