import { NgIf } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel,Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,RouterLink,HttpClientModule,FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  singupmodal : Singupmodal;

  ngOnInit() {
    
  }

  constructor(private http:HttpClient,private router:Router){
        this.singupmodal = new Singupmodal();
  }
  

  registform    = new FormGroup(
    {
      name : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      mobile: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      discription : new FormControl('',Validators.required),
      cb: new FormControl(false,Validators.requiredTrue)

    })
    get name (){
      return this.registform.get('name');
    }
    get email (){
      return this.registform.get('email');
    }
    get mobile (){
      return this.registform.get('mobile');
    }
    get password (){
      return this.registform.get('password');
    }
    get discription (){
      return this.registform.get('discription');
    }
    

  Onsignup(){
    debugger;
    this.http.post('https://mnservice.azurewebsites.net/api/Users/CreateUser',this.singupmodal).subscribe((res:any) =>{
      debugger;
      if(res.result){
        alert ('Registration is completed.Please login now!')
        this.router.navigateByUrl('/login');
      }else{
        alert(res.message);
      }
    })
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
         return false;
      }
      return true;
  
  }
}


export class Singupmodal {

  name : string;
  email : string;
  mobile: string;
  password: string;
  discription : string;

 constructor() {
  this.name="";
  this.email="";
  this.mobile="";
  this.password="";
  this.discription="";

 }
}
