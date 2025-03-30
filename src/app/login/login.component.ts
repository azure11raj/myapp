import { Component } from '@angular/core';
import { NavigationEnd, RouterLink, RouterModule } from '@angular/router';
//import { Router } from 'express';
import { Router } from '@angular/router'
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule,  NgClass,  NgIf } from '@angular/common';
import { UserService } from '../users/user.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,RouterLink,FormsModule,HttpClientModule,ReactiveFormsModule,NgIf,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
 export class LoginComponent {

  loginModalObj: Login ;
  isSpanhidden: boolean = false;


   constructor(private http:HttpClient, private router :Router, private userservice: UserService){
    this.loginModalObj = new Login();
    
   }

   
    loginforms = new FormGroup ({
      mobile: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
  
    })
  
   get mobile(){
    return this.loginforms.get('mobile');
   }
   get password(){
    return this.loginforms.get('password');
   }
  

   Onlogin (){
    debugger;

    if(this.loginforms.valid) 
    {
    this.http.post('https://mnservice.azurewebsites.net/api/Users/Login',this.loginModalObj).subscribe((res:any)=>{
      if(res.result){
        
        this.userservice.setUsername(res.username);
     
        // Get updated user data after login
        (this.userservice.getUsername()).substring
       // alert(res.username);
        //alert(this.userservice.getUsername());

        localStorage.setItem('username',res.username);
        this.isSpanhidden = this.isSpanhidden
        this.router.navigateByUrl('');
      }else{     
        //alert("Login Failed")
      }
    });
  }
  else{ 
          this.isSpanhidden = !this.isSpanhidden;
        
      }
   }

   
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
         return false;
      }
      return true;
  
  }
}
 
export class Login {

  
  Mobile: string;
  Password:string;
 
 constructor() {

  this.Mobile="";
  this. Password="";
 
 
 }
}


