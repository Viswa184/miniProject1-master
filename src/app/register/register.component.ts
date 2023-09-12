import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regArry:any=[];

  constructor(private serviceobj:AppServiceService,private router:Router,private formBuilder:FormBuilder){
    
  }

  mobNumberPattern="^((\\+91-?)|0?[0-9]{10}$";
  passwordptn='^(?-.*?[A-Z])(?-.*?[a-z])(?-.*?[0-9]).{8,16}$';
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


    register(data:any){
    

        this.serviceobj.userRegisterData(data.value).subscribe(res=>{
          alert("Registration Successfully Completed");
          this.router.navigate(['userHome']);
        },err=>{
          alert("Something went wrong");
        })

      
    }

   
    
}
