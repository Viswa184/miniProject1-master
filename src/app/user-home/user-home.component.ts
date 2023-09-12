import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  currentUser: any;
  jsonData:any[]=[];
  selectedItems: Array<any> = [];
  selectedProduct:any;

  name:string="";
  email:string="";
  password:string="";
  userdata:any;

  constructor(private serviceobj:AppServiceService,private router:Router){
    
  }



  ngOnInit(): void {
    this.userdata = this.serviceobj.getUserData();
    this.name = this.userdata.name;
    this.serviceobj.getData().subscribe((data) => {
      this.jsonData = data;
    },err=>{
      alert('Something went wrong');
    });
  }


  addCart(data:any){
    console.log(data);
    this.serviceobj.itemCart(data).subscribe(res=>{
      alert("Item added Successfully");
      console.log(res);
    },err=>{
      alert("Item already added to Cart");
    })  
  }
  

  get_Item(id:number){
    this.serviceobj.getItem(id).subscribe(
      (data:any)=>{
        this.selectedProduct = data;
      },
      err=>{
        alert('Not Found');
      }
    )

  }
  
}
