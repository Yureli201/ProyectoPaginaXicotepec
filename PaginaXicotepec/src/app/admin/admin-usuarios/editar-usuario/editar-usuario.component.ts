import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from 'src/app/Servicios/MODELOS/modelos';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  Usuario:any={
    nombreCompleto: '',
    correoElectronico: '',
    password: '',
    fechaDeNacimiento: '',
    genero: '',
    lugarProcedencia: ''
  }
  mensajeBien=false

  constructor(public servicio:ServiciosService, private router:Router , private activeRoute: ActivatedRoute){}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      const UsuarioID = params.get('id');
      this.buscarUsuario(UsuarioID);
    });
  }

  buscarUsuario(id: any){
  this.servicio.leerUsuarioID(id).subscribe(
    data => {
      console.log(data);
      this.Usuario=data
    },
    error => {
      console.log("hay un error:");
      console.error(error);
    }
    )
  }

  guardarUsuario(id: string){
  this.servicio.modificarUsuario(id, this.Usuario).subscribe(
    data=>{
    console.log(data)
    this.mensajeBien=true
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 3000);

    },
    error=>{
    console.error(error);
    }
    )
  }
}
