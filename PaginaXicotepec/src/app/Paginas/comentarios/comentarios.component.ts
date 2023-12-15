import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { comentario, recurso } from 'src/app/Servicios/MODELOS/modelos';
import { ServiciosService } from 'src/app/Servicios/servicios.service';
import { SharedService } from 'src/app/Servicios/shared.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {

  Recurso:any;
  Comentarios:any
  userId: string="";
  comentario:comentario={
    mensaje: '',
    recursoTuristicoID: '',
    usuarioID: ''
  }
  usuario:any
  recursoID: any;
  mensajeCom: any;

  constructor(private servicio: ServiciosService,private sharedService: SharedService ,private router:Router , private activeRoute: ActivatedRoute){}

  ngOnInit(){
    this.sharedService.currentUserId.subscribe((userId: string) => {
      this.userId = userId;
      // Hacer lo que necesites con el ID del usuario en el Navbar
    });

    this.activeRoute.paramMap.subscribe(params => {
      this.recursoID = params.get('id');
      this.buscarRecurso(this.recursoID);
      this.buscarComentarios(this.recursoID)
      this.buscarUsuario()
    });
  }

  buscarRecurso(id: any) {
    this.servicio.leerRecursosId(id).subscribe(
      data => {
        console.log(data);
        this.Recurso=data
      },
      error => {
        console.log("hay un error al buscar:");
        console.error(error);
      }
    );
  }

  buscarComentarios(id:any){
  this.servicio.leerComentarioRecurso(id).subscribe(
    data => {
      console.log(data);
      this.Comentarios=data
    },
    error => {
      console.log("hay un error:");
      console.error(error);
    }
    )
  }

  buscarUsuario(){
  this.servicio.leerUsuarioID(this.userId).subscribe(
    data=>{
    this.usuario=data
    },
    error=>{
    console.error(error);
    }
    )
  }


  guardarComentario(mensaje: any, usuario: any, recurso: any){
    this.comentario={
    mensaje: mensaje,
    recursoTuristicoID: recurso,
    usuarioID: usuario
    }
    this.servicio.guardarComentario(this.comentario).subscribe(
      data => {
        console.log(this.comentario)
        console.log(data);
        this.buscarComentarios(this.recursoID)
      },
      error=>{
      console.log("hay un error:")
      console.error(error)
      }
      )
    }
}

