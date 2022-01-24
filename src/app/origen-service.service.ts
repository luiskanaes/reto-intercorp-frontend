import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrigenServiceService {

  constructor(
    private http: HttpClient,
  ) {
  }


  listar() {
    return this.http.get(environment.apiUrl + "api/clientes/list");
  }

  registrar(data: any) {

    return this.http.post(environment.apiUrl + "api/clientes/crea", data);
  }

  variacion() {
    return this.http.get(environment.apiUrl + "api/clientes/kpi");
  }
}
