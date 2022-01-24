import {Injectable} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService) {
  }

  mostrar() {
    this.spinner.show();
  }

  ocultar() {
    this.spinner.hide();
  }
}
