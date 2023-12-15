import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent {

  usuarios:any;

  constructor(private servicio: ServiciosService){}

  ngOnInit(){
    this.servicio.leerUsuario().subscribe(
      data => {
        this.usuarios = data;
        console.log(data)
      },
      error=>{
      console.log("hay un error:")
      console.error(error)
      }
      )
}


}
