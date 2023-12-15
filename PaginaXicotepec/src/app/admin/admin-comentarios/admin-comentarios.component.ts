import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/Servicios/servicios.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-comentarios',
  templateUrl: './admin-comentarios.component.html',
  styleUrls: ['./admin-comentarios.component.css']
})
export class AdminComentariosComponent {

  eliminar=faTrash

  comentarios:any;

  constructor(private servicio: ServiciosService){}

  ngOnInit(){
    this.buscarComentarios()
}

buscarComentarios(){
  this.servicio.leerComentario().subscribe(
    data => {
      this.comentarios = data;
      console.log(data)
    },
    error=>{
    console.log("hay un error:")
    console.error(error)
    }
    )
}
borrarComentario(id:string){
  this.servicio.borrarComentario(id).subscribe(
    data=>{
    console.log(data)
    this.buscarComentarios()
    },
    error=>{
    console.error(error)
    }
    )
}

}
