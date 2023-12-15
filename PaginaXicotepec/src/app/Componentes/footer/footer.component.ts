import { Component } from '@angular/core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SharedService } from 'src/app/Servicios/shared.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  Facebook = faFacebook;
  Instagram = faInstagram;
  Gmail = faEnvelope;
  userId: string='';


  constructor(private sharedService: SharedService){}

  ngOnInit(){
    this.sharedService.currentUserId.subscribe((userId: string) => {
      this.userId = userId;
      console.log('hola usuario')
      console.log(this.userId)
      // Hacer lo que necesites con el ID del usuario en el Navbar
    });
  
  }

}
