import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { usuario } from 'src/app/Servicios/MODELOS/modelos';
import { ServiciosService } from 'src/app/Servicios/servicios.service';
import { SharedService } from 'src/app/Servicios/shared.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  User=faUser
  pagina="";
  userId: string = '';
  usuario:any={
    nombreCompleto: '',
    correoElectronico: '',
    password: '',
    fechaDeNacimiento: '',
    genero: '',
    lugarProcedencia: ''
  }

  constructor(private router: Router, private sharedService: SharedService, private servicio: ServiciosService) { }

  ngOnInit(): void {
    this.sharedService.currentUserId.subscribe((userId: string) => {
      this.userId = userId;
      // Hacer lo que necesites con el ID del usuario en el Navbar
    });

    this.router.events.subscribe(event => {
      
      if (event instanceof NavigationEnd) {
        this.pagina = event.url;
        console.log(this.pagina , this.userId)
      }
    })

  this.buscarUsuario()
}
buscarUsuario(){
this.servicio.leerUsuarioID(this.userId).subscribe(
  data=>{
  this.usuario=data
  },
  error=>{
  console.error(error)
  }
  )
}

}
