import { OrigenServiceService } from './../origen-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombre = "";
  apellido= "";
  edad =  0;
  fechaNacimiento = "";
  result: any;
  message:any;

  constructor(private service : OrigenServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  OnSubmit()
  {
    let request: any = {};
    request["nombre"] = this.nombre;
    request["apellido"] = this.apellido;
    request["edad"] = this.edad;
    request["fechaNacimiento"] = this.fechaNacimiento;
    this.service.registrar(request).subscribe(data => {
      this.result = data;
      if(this.result["message"] == "OK"){
        this.router.navigateByUrl('cliente');
      }
    }, error => {
      console.error(error);
      this.result= error["error"];
      this.message = this.result.message;
    })
  }
}
