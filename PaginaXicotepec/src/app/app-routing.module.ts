import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { InicioComponent } from './Paginas/inicio/inicio.component';
import { HistoriaComponent } from './Paginas/historia/historia.component';
import { GastronomiaComponent } from './Paginas/gastronomia/gastronomia.component';
import { AgriculturaComponent } from './Paginas/agricultura/agricultura.component';
import { GanaderiaComponent } from './Paginas/ganaderia/ganaderia.component';
import { RestaurantesComponent } from './Paginas/restaurantes/restaurantes.component';
import { HotelesComponent } from './Paginas/hoteles/hoteles.component';
import { LugaresTuristicosComponent } from './Paginas/lugares-turisticos/lugares-turisticos.component';
import { FestividadesComponent } from './Paginas/festividades/festividades.component';
import { AcercaDeComponent } from './Paginas/acerca-de/acerca-de.component';

import { AdminUsuariosComponent } from './admin/admin-usuarios/admin-usuarios.component';
import { AdminRecursosComponent } from './admin/admin-recursos/admin-recursos.component';
import { AdminComentariosComponent } from './admin/admin-comentarios/admin-comentarios.component';
import { EditarRecursoComponent } from './admin/admin-recursos/editar-recurso/editar-recurso.component';
import { AgregarRecursoComponent } from './admin/admin-recursos/agregar-recurso/agregar-recurso.component';
import { LoginComponent } from './admin/login/login.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { ComentariosComponent } from './Paginas/comentarios/comentarios.component';
import { EditarUsuarioComponent } from './admin/admin-usuarios/editar-usuario/editar-usuario.component';


const routes: Routes = [
  {path:'app-component', component:AppComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'inicio',component:InicioComponent},
  {path:'historia',component:HistoriaComponent},
  {path:'gastronomia',component:GastronomiaComponent},
  {path:'agricultura',component:AgriculturaComponent},
  {path:'ganaderia',component:GanaderiaComponent},
  {path:'restaurantes',component:RestaurantesComponent},
  {path:'hoteles',component:HotelesComponent},
  {path:'lugares-turisticos',component:LugaresTuristicosComponent},
  {path:'festividades',component:FestividadesComponent},
  {path:'acerca-de',component:AcercaDeComponent},
  {path:'administrar-usuarios',component:AdminUsuariosComponent},
  {path:'administrar-recursos',component:AdminRecursosComponent},
  {path:'administrar-comentarios',component:AdminComentariosComponent},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'editar-recurso/:id',component:EditarRecursoComponent},
  {path:'agregar-recurso',component:AgregarRecursoComponent},
  {path:'comentarios/:id',component:ComentariosComponent},
  {path:'editar-usuario/:id',component:EditarUsuarioComponent},

  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
