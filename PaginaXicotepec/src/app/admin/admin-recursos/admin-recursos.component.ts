import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/Servicios/servicios.service';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-recursos',
  templateUrl: './admin-recursos.component.html',
  styleUrls: ['./admin-recursos.component.css']
})
export class AdminRecursosComponent {

  eliminar=faTrash
  editar=faPenToSquare

  recursos:any = [];
  
  constructor(private servicio: ServiciosService){}

  ngOnInit(){
    this.obtenerRecursos()
}

obtenerRecursos(){
  this.servicio.leerRecursos().subscribe(
    data => {
      this.recursos = data;
      console.log(data)
    },
    error=>{
    console.log("hay un error:")
    console.error(error)
    }
    )
}

borrarRecurso(idRecurso:string){
this.servicio.borrarRecurso(idRecurso).subscribe(
  data=>{
  console.log(data)
  this.obtenerRecursos()
  },
  error=>{
  console.error(error)
  }
  )
}

}
