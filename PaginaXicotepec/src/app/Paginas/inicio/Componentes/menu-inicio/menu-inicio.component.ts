import { Component } from '@angular/core';
import { faLandmark, faBowlFood, faWheatAwn, faCow, faUtensils, faHotel, faChampagneGlasses, faChurch, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css']
})
export class MenuInicioComponent {
  historia=faLandmark;
  gastronomia=faBowlFood;
  agricultura=faWheatAwn;
  ganaderia=faCow;
  restaurantes=faUtensils;
  hoteles=faHotel;
  festividades=faChampagneGlasses;
  visitar=faChurch;
  nosotros=faPeopleGroup;

}
