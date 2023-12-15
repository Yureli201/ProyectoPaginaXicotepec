import { Component} from '@angular/core';
import { recurso } from 'src/app/Servicios/MODELOS/modelos';
import { ServiciosService } from 'src/app/Servicios/servicios.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-recurso',
  templateUrl: './agregar-recurso.component.html',
  styleUrls: ['./agregar-recurso.component.css']
})
export class AgregarRecursoComponent {

  Recurso:recurso={
    nombreRecurso:"",
    imagen:null as any,
    descripcion:"",
    calificacion:5,
    categoria:'Gastronomia',
    telefono:undefined,
    direccion:undefined,
    correo:undefined,
    redesSociales: undefined,
  }

  cambio(event: any){
    this.Recurso.calificacion = event.target.value;
    console.log(this.Recurso.calificacion)
  }

  onFileSelected(event: any) {
    const fileInput = event.target as HTMLInputElement;
    
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.Recurso.imagen = file;
    }
  }
  constructor(private servicio: ServiciosService, private route:Router){}

  guardarRecurso(){

  this.servicio.guardarRecurso(this.Recurso).subscribe(
    data => {
      console.log(this.Recurso)
      this.route.navigate(['/administrar-recursos'])
    },
    error=>{
    console.log("hay un error:")
    console.error(error)
    }
    )
  
  }

}
