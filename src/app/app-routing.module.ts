import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path: '', redirectTo: 'Inicio', pathMatch: 'full'},  
  {path: 'Inicio', component: InicioComponent},
  {path: 'Proyectos', component: ProyectosComponent},
  {path: 'Formacion', component: FormacionComponent},
  {path: 'Contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




