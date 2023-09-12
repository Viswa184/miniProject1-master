import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent {

  id: any;
  item_name: any;
  item_price: any;
  item_img: any;
  Sharedobj: any;

  constructor(public serviceobj: AppServiceService, public router:Router){}

  ngOnInit():void{

    this.Sharedobj = this.serviceobj.getSharedData()
    console.log(this.Sharedobj);
    this.id = this.Sharedobj.id;
    this.item_name = this.Sharedobj.item_name;
    this.item_img=this.Sharedobj.item_img;
    this.item_price = this.Sharedobj.item_price;

  }

  onSubmit(form:any){

    console.log(form.value);
    if(form.valid){
      this.serviceobj.updateproduct(form.value).subscribe(res => {
        this.router.navigate(['Product']);
      }, err => {
        alert ('Something went wrong');
      })
    }
  }
}
