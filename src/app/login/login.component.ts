import { Component } from '@angular/core';
import { NavigationEnd, RouterLink, RouterModule } from '@angular/router';
import { Router } from 'express';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  signupModalObj: Singupmodal = new Singupmodal();
  loginModalObj: LoginModal = new LoginModal();
}

export class Singupmodal {

  name : string;
  email : string;
  mobile: string;
  password:string;
  message : string;

 constructor() {
  this.name="";
  this.email="";
  this.mobile="";
  this.password="";
  this.message="";

 }
}

 
export class LoginModal {

  
  mobile: string;
  password:string;
 
 constructor() {

  this.mobile="";
  this.password="";
 
 }
}


