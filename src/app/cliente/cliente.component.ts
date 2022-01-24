import { OrigenServiceService } from './../origen-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  listaclientes:any;
  result:any;
  constructor(
    private service : OrigenServiceService
  ) { }

  ngOnInit(): void {
    this.clientas();
    this.kpi();
  }

  clientas()
  {
    this.service.listar().subscribe(data =>{
      this.listaclientes=data;
      this.listaclientes = this.listaclientes.data;
    }, error => {
      console.error(error);
      this.listaclientes = [];
    });
  }

  kpi()
  {
    this.service.variacion().subscribe(data => {
      this.result = data;
      this.result = this.result.data;
    }, error => {
      console.error(error);
      this.result = null;
    });
  }
}
