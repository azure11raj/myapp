
import { RouterLink, RouterModule } from '@angular/router';
import {  UserService } from '../users/user.service';
import { Component} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  
  imports: [RouterModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   //currentuser : string ="Login";

   @Input() currentuser: any;

  ngOnChanges() {
    // React to input changes
    console.log('Header updated with new user:', this.currentuser);
  }

  constructor( private userservice : UserService){
      //this.currentuser = this.userservice.getUsername();
      
  }
  
  ngOnInit() {
    // this.currentuser = this.userservice.getUsername();
    // console.log('User data in Dashboard:', this.currentuser);
    
    // return this.currentuser;
    // console.log('User data in Dashboard:', this.currentuser);
  
  }

}
