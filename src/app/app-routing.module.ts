import {ClienteComponent} from './cliente/cliente.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistroComponent} from './registro/registro.component';

const routes: Routes = [
  {path: '', redirectTo: 'cliente', pathMatch: 'full'},
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente/add', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
