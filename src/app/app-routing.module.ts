import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { Auuthentication } from './authentication';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Header',component:HeaderComponent},
  {path: '',redirectTo: '/Login',pathMatch: 'full'},
  {path:'Footer',component:FooterComponent},
  {path:'Product',component:ProductComponent, canActivate:[Auuthentication]},
  {path:'Contact',component:ContactComponent}, 
  {path:'userHome',component:UserHomeComponent},
  {path:'userCart',component:UserCartComponent},
  {path:'updateItem',component:UpdateItemComponent},
  {path:'itemCreate',component:ItemCreateComponent,canActivate:[Auuthentication]},
  {path:'Register',component:RegisterComponent,canActivate:[Auuthentication]},
  {path:'Payment',component:DetailsComponent,canActivate:[Auuthentication]},
  { path: 'lazyloading', loadChildren: () => import('./lazyloading/lazyloading.module').then(m => m.LazyloadingModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
