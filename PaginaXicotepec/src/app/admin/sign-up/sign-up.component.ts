import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/Servicios/MODELOS/modelos';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  Usuario:usuario={
    nombreCompleto: '',
    correoElectronico: '',
    password: '',
    fechaDeNacimiento: '',
    genero: 'M',
    lugarProcedencia: ''
  }
  mensajeBien=false

  constructor(private servicio: ServiciosService, private route: Router){}

  guardarUsuario(){
    
    this.servicio.guardarUsuario(this.Usuario).subscribe(
      data => {
        console.log(this.Usuario)
        this.mensajeBien=true
        setTimeout(() => {this.route.navigate(['/login']);}, 2000);
      },
      error=>{
      console.log("hay un error:")
      console.error(error)
      }
      )
  
  }
}
