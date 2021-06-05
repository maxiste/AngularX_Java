import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './app.calculadora.component.html'

})
export class AppCalculadoraComponent{

  public numero1:number
  public numero2:number
  public mensaje:string="Este es una variable que se llam del componente"
  public resultado:number


  constructor() {
    this.numero1=0
    this.numero2=0

  }

  ngOnInit(): void {

  }
  public sumar(){
    this.resultado = this.numero1+this.numero2
  }
  public multiplicar(){
    this.resultado = this.numero1*this.numero2
  }

}
