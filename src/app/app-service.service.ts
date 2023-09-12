import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {



  constructor(private http: HttpClient,private router:Router) {
      this.userData();
   }

  Url='http://localhost:3000/item';
  Url1='http://localhost:3000/contactR';
  Url2='http://localhost:3000/users';
  Url3='http://localhost:3000/cart';

  Data :any[]= [];
  sharedData?:any;
  private loggedInUser: any[] = []; 
  public cartItemList : any =[]

  private userData(){
    this.http.get<any[]>(this.Url2).subscribe(data=>{
      this.Data = data;
      
    },(error)=>{
      console.error('Loading Data failed',error);  
    })
  }

  loginCheck(username:string, password:string){
    
    const user = this.Data.find(u=>u.username == username && u.password == password);
    if(user){
      if(user.role=='admin'){
        
        this.router.navigate(['Product']);
       }
      else{
      this.loggedInUser = user;
      sessionStorage.setItem("Token",user.name)
      console.log(this.loggedInUser);
       this.router.navigate(['userHome']);
      }
      return true;
    }
    else{
      return false;
    }
  }

  getUserData(){
    return this.loggedInUser;
  }
  userRegisterData(data:any):Observable<any>{
    return this.http.post<any[]>(this.Url2,data)
  }

//--------------------------------------------------------------
postData(data:any):Observable<any>{
  return this.http.post<any[]>(this.Url1,data)
}


  getData(): Observable<any> {
    return this.http.get<any[]>(this.Url);
  }
//--------------------------------------------------------
  deleteItem(id:any): Observable<any> {
      return this.http.delete(this.Url+'/'+id);
  }

  editItem(data:any):Observable<any>{
      return this.http.put<any>(this.Url,data);
  }

  getItem(id:any):Observable<any>{
      return this.http.get<any>(this.Url+'/'+id)
  }

  createProduct(productData: any): Observable<any> {
    return this.http.post<any>(this.Url, productData);
  }

  updateproduct(data: any): Observable<any> {
    const url = `${this.Url}/${data.id}`;
    return this.http.put(url, data);
  }

  setSharedData(data: any) {
    this.sharedData = data;
  }

  getSharedData(): any{
      return this.sharedData;
  }

  
//------------------------------------------------------------------

  itemCart(data:any){
    return this.http.post<any>(this.Url3,data);
  }

  getcartdata()
  {
    return this.http.get<any[]>(this.Url3);
  }

  removecart(id:any)
  {
      return this.http.delete<any>(this.Url3+'/' + id);
  }

  loggedIn():any{
    return sessionStorage.getItem("Token")
  }

  
//-------------------------------------------------



}
