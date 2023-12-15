import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-lugares-turisticos',
  templateUrl: './lugares-turisticos.component.html',
  styleUrls: ['./lugares-turisticos.component.css']
})
export class LugaresTuristicosComponent {
  recursos:any = [];
  
  constructor(private servicio: ServiciosService){}

  ngOnInit(){
    this.servicio.leerRecursosCategoria("Lugar Turistico").subscribe(
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
