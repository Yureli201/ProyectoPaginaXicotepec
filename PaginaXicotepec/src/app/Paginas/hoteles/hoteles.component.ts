import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent {

  recursos:any = [];
  
  constructor(private servicio: ServiciosService){}

  ngOnInit(){
    this.servicio.leerRecursosCategoria("Hotel").subscribe(
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
