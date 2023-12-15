import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recurso } from 'src/app/Servicios/MODELOS/modelos';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-editar-recurso',
  templateUrl: './editar-recurso.component.html',
  styleUrls: ['./editar-recurso.component.css']
})
export class EditarRecursoComponent {

  Recurso:any={
    nombreRecurso: '',
    imagen: '',
    descripcion: '',
    calificacion: 0,
    categoria: '',
  }

  cambio(event: any){
    this.Recurso.calificacion = event.target.value;
  }

  constructor(private servicio: ServiciosService,private router:Router , private activeRoute: ActivatedRoute){}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      const recursoID = params.get('id');
      this.buscarRecurso(recursoID);
    });
  }

  buscarRecurso(id: any) {
    this.servicio.leerRecursosId(id).subscribe(
      data => {
        console.log(data);
        this.Recurso=data
      },
      error => {
        console.log("hay un error:");
        console.error(error);
      }
    );
  }

  guardarRecurso(id:string){
    this.servicio.modificarRecurso(id, this.Recurso ).subscribe(
      data => {
        console.log(this.Recurso)
        this.router.navigate(['/administrar-recursos'])
      },
      error=>{
      console.log("hay un error:")
      console.error(error)
      }
      )
    
    }
}
