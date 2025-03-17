import {  Component, Injectable } from '@angular/core';
import { CommonModule,DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName : string ='';
  
  setUsername (name : string ):void {
    this.userName = name;
  }

  getUsername ():string{
   
    return  this.userName;
  }

  constructor() { }
}
