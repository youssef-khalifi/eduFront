import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


  constructor(private service : AuthService) {
  }
  ngOnInit(): void {

    console.log(this.service.authenticatedUser.username)

  }

}
