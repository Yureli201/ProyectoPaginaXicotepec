import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pagina="";
  noInicio=true
  color=""

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      switch (this.pagina) {
        case '/historia':
          this.color="#55C904"
        break;
        case '/administrar-recursos':
          this.color="#55C904"
        break;
        case '/hoteles':
          this.color="#55C904"
        break;
        case '/gastronomia':
          this.color="#DF0002"
          break;
        case '/festividades':
          this.color="#DF0002"
        break;
        case '/agregar-recurso':
          this.color="#DF0002"
        break;
        case '/agricultura':
          this.color="#E4007D"
        break;
        case '/lugares-turisticos':
          this.color="#E4007D"
        break;
        case '/administrar-usuarios':
          this.color="#E4007D"
        break;
        case '/ganaderia':
          this.color="#5B00C4"
        break;
        case '/sign-up':
          this.color="#5B00C4"
        break;
        case '/restaurantes':
          this.color="#004ECB"
        break;
        case '/login':
          this.color="#004ECB"
        break;
        case '/administrar-comentarios':
          this.color="#004ECB"
        break;
        default:
          this.color="#904614"
          break;
      }
      console.log(this.color)
      if (event instanceof NavigationEnd) {
        this.pagina = event.url;
        console.log(`la pagina actual es ${this.pagina}`)
        if (this.pagina=="/inicio" || this.pagina=="/") {
          console.log("el navbar deberia desaparecer")
          this.noInicio=false
        }
        else{
          this.noInicio=true
        }
      }
    })
}
}
