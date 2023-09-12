import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Observable } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent {


  jsonData:any[]=[];
  message:string='';
  totalamount:any;
  selectedItems: Array<any> = []; 
  total=0;    
  value:any;
  public grandTotal !: number;
  selectedProduct: any;

  constructor(private serviceobj:AppServiceService,private activatedRoute: ActivatedRoute,private router:Router){

  }



  ngOnInit(): void {
    this.serviceobj.getcartdata().subscribe(data => {
      this.jsonData = data;
      if(this.jsonData.length == 0){
        this.message = "No items";
      }
    });
  }
   

  remove(id:any):void{
    this.serviceobj.removecart(id).subscribe(res=>{
      this.ngOnInit();
      alert('Item Deleted Sucessfully');
    },err=>{
      alert('unable to delete the record');
    })

  }
  

  updateTotalPrice(item: any, food: any) {
    const value = parseInt(item.target.value);
    food.totalPrice = value * food.item_price;
    console.log(food.totalPrice)
  }

  async saveCartItems() {
    var totalPrice = 0;
    let httpCalls: Observable<any>[] = [];
    this.serviceobj.getcartdata().subscribe(
      (data:any)=>{
        this.selectedItems = data;
        this.selectedItems.forEach(element => {
          totalPrice = totalPrice + parseInt(element.totalPrice);
          console.log(totalPrice)
        });
        // this.router.navigate(['order',totalPrice]) 
      }
    )
      
  }

  }


