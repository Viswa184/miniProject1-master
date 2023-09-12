import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private serviceobj:AppServiceService,private router:Router){
    
  }

    onSubmit(data:any){
      this.serviceobj.postData(data.value).subscribe(res=>{
        alert("Posted Successfully");
        this.router.navigate(['Product']);
      },err=>{
        alert("Something went wrong");
      })
    }
}
