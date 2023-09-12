import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AppServiceService } from "./app-service.service";



@Injectable()
export class Auuthentication implements CanActivate{
    constructor(private serviceobj:AppServiceService,private router:Router){
    
    }

    canActivate():boolean{
        if (this.serviceobj.loggedIn()){
            return true;
        }
        else{
            alert('Please Login to continue....!');
            this.router.navigate(['Login']);
            return false;
        }
    }
}