import { Component } from '@angular/core';
import { ServiciosService } from '../../Servicios/servicios.service'
import { recurso } from 'src/app/Servicios/MODELOS/modelos';

@Component({
  selector: 'app-festividades',
  templateUrl: './festividades.component.html',
  styleUrls: ['./festividades.component.css']
})
export class FestividadesComponent {

  recursos:any = [];
  
  constructor(private servicio: ServiciosService){}

  ngOnInit(){
    this.servicio.leerRecursosCategoria("Festividad").subscribe(
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
