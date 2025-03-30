
import { RouterLink, RouterModule,Router } from '@angular/router';
import {  UserService } from '../users/user.service';
import { Component,OnInit} from '@angular/core';
import { CommonModule,  NgClass,  NgIf } from '@angular/common';
import { Input } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  
  imports: [RouterModule,RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   currentuser: string="";
   isLoging : boolean = false;

  constructor( private userservice : UserService, private router:Router){
      // this.currentuser = this.userservice.getUsername();
      
  }
  
  ngOnInit():void {
    
   this.userservice.username$.subscribe((username)=>{
        this.currentuser=username;
        this.isLoging = false;
        if(this.currentuser !="")
        {
          this.isLoging = true;
        }
      
      });
  }

  getlogout(){
    
    this.isLoging = false;
    this.router.navigateByUrl('/login');

  }


}
