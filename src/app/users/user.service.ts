import {  Component, EventEmitter, Injectable } from '@angular/core';
import { CommonModule,DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usernameSubject  = new BehaviorSubject<string>('');
  username$ = this.usernameSubject .asObservable();

  private userName : string ='';



  constructor() { }

  
  
  setUsername (name : string ):void {
   // this.userName = name;
   this.usernameSubject .next(name);
  }

  getUsername ():string{
   
    //return  this.userName;
    return this.usernameSubject .getValue();
  }
}
