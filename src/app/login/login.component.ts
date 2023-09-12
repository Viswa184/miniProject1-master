import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:any='';
  password:any='';

  constructor(private serviceobj:AppServiceService,private router:Router){

  }

  login(loginForm:any) {
    if(loginForm.valid){
      if(this.serviceobj.loginCheck(this.username,this.password)){
        alert("Login Successfull");
    }
    else{
      alert("Invalid credentials");
    }
    }
    else{
      alert('Please fill the required fields');
    }
  }
}