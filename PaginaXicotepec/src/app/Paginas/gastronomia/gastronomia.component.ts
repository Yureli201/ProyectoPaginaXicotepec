import { Component } from '@angular/core';
import { ServiciosService } from '../../Servicios/servicios.service'
import { recurso } from 'src/app/Servicios/MODELOS/modelos';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrls: ['./gastronomia.component.css']
})
export class GastronomiaComponent {
  recursos:any = [];
  
  constructor(private servicio: ServiciosService){}

  ngOnInit(){
    this.servicio.leerRecursosCategoria("Gastronomia").subscribe(
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
}
