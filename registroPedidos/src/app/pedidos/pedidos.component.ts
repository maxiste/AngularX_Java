import { Pedidos } from './../entidades/pedidos';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html'
})
export class PedidosComponent implements OnInit {
  public categorias;
  public mpedidos:boolean=false;
  public cpedido:Pedidos;
  public pedidos:Pedidos[];

  constructor() {
    //this.pedidos=new Pedidos();
    this.categorias=[{"categoria":"Ferreteria"},{"categoria":"Alumbrado"},{"categoria":"Alimentacion"},{"categoria":"Repuestos"},{"categoria":"Electronica"}];
    this.pedidos=[]; //inicializamos el arreglo
    this.cpedido=new Pedidos();
  }

  ngOnInit(): void {
  }
  public guardarPedido(){
    this.pedidos.push(this.cpedido)
    this.vaciarFormulario() //para que traiga un nuevo objeto
    console.log(this.cpedido)
    this.mpedidos=true;

  }

  public mostrarPedidos(){

  }

  public vaciarFormulario():void{
    this.cpedido= new Pedidos()//esta todo undefined


  }
}
