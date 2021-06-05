import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html'
})
export class PieComponent implements OnInit {

  constructor() {
    console.log("Creando Pie Components...");
   }

  ngOnInit(): void {
  }

}
