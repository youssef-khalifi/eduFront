import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    IonicModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(protected service : AuthService,
              private router : Router) {
  }

  public navigate(route : string){

    if (route.includes('profile')){
      this.router.navigate(['/home/profile'])
    }
  }
}
