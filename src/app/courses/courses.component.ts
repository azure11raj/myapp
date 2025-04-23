import { AfterViewInit,Component ,PLATFORM_ID, Inject, viewChild, ElementRef, ViewChild} from '@angular/core';
import { RouterLink, RouterModule,Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, NgModel,Validators } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { NgIf,isPlatformBrowser } from '@angular/common';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterModule,FormsModule,ReactiveFormsModule,HttpClientModule,NgIf],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent  {

  @ViewChild('modal') modal!: ElementRef;

  corenames : string ;
  alertspan :string;
  formData ={
    name :"",
    email : "",
    mobile :"",
    corename : "",
    message:""
};

 constructor(private http:HttpClient, @Inject(PLATFORM_ID) private platformId: Object){
 this.corenames ="";
 this.alertspan ="";


 }

       registercourse    = new FormGroup(
        {
          name : new FormControl('',Validators.required),
          email : new FormControl('',Validators.required),
          mobile: new FormControl('',Validators.required),
          message : new FormControl('',Validators.required),
           
        })
        get name (){
          return this.registercourse.get('name');
        }
        get email (){
          return this.registercourse.get('email');
        }
        get mobile (){
          return this.registercourse.get('mobile');
        }
       
        get message (){
          return this.registercourse.get('message');
        }

        
openModal(message:string)
 {
  this.Cleardata();
  this.corenames = message;
  console.log('openModal called!');
  this.Modalshow();
 
 }

        onSave(){
          debugger;

          this.formData.corename = this.corenames;
          this.corenames="";
          this.http.post('https://mnservice.azurewebsites.net/api/Users/CourseRegister',this.formData).subscribe((res:any) =>{
            debugger;
            if(res.result){
              //alert(res.message);
              this.modalclose();
              this.Cleardata();
              this.registercourse.reset();
              
            }else{
              //alert(res.message);
              this.alertspan = res.message;
             // this.modalclose();
             this.registercourse.reset();
            }
          })
         
          
        }

        Cleardata()
        {
          
           this.formData.name = "" ;
           this.formData.email = "" ;
           this.formData.mobile = "" ;
           this.formData.corename = "" ;
           this.formData.message= "" ;
           this.alertspan="";
        
        }

        Modalshow()
        {
          if (isPlatformBrowser(this.platformId)) {
            const $ = (window as any)['$'];
            if ($ && this.modal?.nativeElement) {
              console.log('Showing modal...');
             // $(this.modal.nativeElement).modal('show');
              $(this.modal.nativeElement).modal({
                backdrop: "static", // Prevent closing when clicking outside
                keyboard: false, // Prevent closing with ESC key
          
              });
              $(this.modal.nativeElement).modal('show');
        
            } else {
              console.warn('Modal element or jQuery not found!');
            }
          }
          

        }

        modalclose(){
          if (isPlatformBrowser(this.platformId)) {
            const $ = (window as any)['$'];
            if ($ && this.modal?.nativeElement) {
              console.log('closing modal...');
             
              $(this.modal.nativeElement).modal('hide');
        
            } else {
              console.warn('Modal element or jQuery not found!');
            }
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


