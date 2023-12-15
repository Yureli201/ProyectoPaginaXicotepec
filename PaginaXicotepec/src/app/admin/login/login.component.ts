import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/Servicios/MODELOS/modelos';
import { ServiciosService } from 'src/app/Servicios/servicios.service';
import { SharedService } from 'src/app/Servicios/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  correo="";
  password="";
  Usuario:any;
  usuarioEmail: string="";
  mensajeBien=false;
  mensajeMal=false;

  constructor(private servicio: ServiciosService, private sharedService: SharedService, private route:Router){}

  buscarUsuario(){
  this.servicio.leerUsuarioEmail(this.correo).subscribe(
    data => {
      this.Usuario=data
      console.log(this.Usuario)
      this.validarContraseña()
    },
    error=>{
    console.log("hay un error:")
    console.error(error)
    }
    )
  }

  validarContraseña(){
  if(this.Usuario.password===this.password){
  this.usuarioEmail=this.Usuario.correo
  this.mensajeBien=true
  setTimeout(() => {this.route.navigate(['/inicio']);}, 2000);

  this.sharedService.setUserId(this.Usuario.id);
  }
  else{
    this.mensajeMal=true
    this.correo=""
    this.password=""
    setTimeout(() => {this.mensajeMal=false;}, 2000);
  }
  }
}
