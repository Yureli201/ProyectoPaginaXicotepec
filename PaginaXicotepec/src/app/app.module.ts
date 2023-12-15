import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
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
import { NavbarInicioComponent } from './Paginas/inicio/Componentes/navbar-inicio/navbar-inicio.component';
import { CarruselInicioComponent } from './Paginas/inicio/Componentes/carrusel-inicio/carrusel-inicio.component';
import { MenuInicioComponent } from './Paginas/inicio/Componentes/menu-inicio/menu-inicio.component';
import { AdminUsuariosComponent } from './admin/admin-usuarios/admin-usuarios.component';
import { AdminRecursosComponent } from './admin/admin-recursos/admin-recursos.component';
import { AdminComentariosComponent } from './admin/admin-comentarios/admin-comentarios.component';
import { LoginComponent } from './admin/login/login.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { EditarRecursoComponent } from './admin/admin-recursos/editar-recurso/editar-recurso.component';
import { AgregarRecursoComponent } from './admin/admin-recursos/agregar-recurso/agregar-recurso.component';

import { ServiciosService } from './Servicios/servicios.service';
import { HttpClientModule } from '@angular/common/http';
import { ComentariosComponent } from './Paginas/comentarios/comentarios.component';
import { EditarUsuarioComponent } from './admin/admin-usuarios/editar-usuario/editar-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    HistoriaComponent,
    GastronomiaComponent,
    AgriculturaComponent,
    GanaderiaComponent,
    RestaurantesComponent,
    HotelesComponent,
    LugaresTuristicosComponent,
    FestividadesComponent,
    AcercaDeComponent,
    NavbarInicioComponent,
    CarruselInicioComponent,
    MenuInicioComponent,
    AdminUsuariosComponent,
    AdminRecursosComponent,
    AdminComentariosComponent,
    LoginComponent,
    SignUpComponent,
    EditarRecursoComponent,
    AgregarRecursoComponent,
    ComentariosComponent,
    EditarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServiciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
