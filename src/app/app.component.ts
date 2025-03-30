import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from './users/user.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FooterComponent, HeaderComponent,RouterModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'  
})
export class AppComponent  {
  title = 'Mncloud';
   username : string ="";

  constructor( private userservice:UserService){

    this.username = this.userservice.getUsername();

    console.log('Header updated with new user:',this.username );
  }
}
