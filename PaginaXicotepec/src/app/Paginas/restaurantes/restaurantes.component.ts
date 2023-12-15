import { Component } from '@angular/core';
import { ServiciosService } from '../../Servicios/servicios.service'
import { recurso } from 'src/app/Servicios/MODELOS/modelos';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {

  recursos:any = [];
  
  constructor(private servicio: ServiciosService){}

  ngOnInit(){
    this.servicio.  leerRecursosCategoria("Restaurante").subscribe(
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
