import { Component,OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {

  selectedFile !: File;
  imageUrl: string ='';

  constructor(private serviceobj:AppServiceService,private router:Router){

  }
  
  

  onSubmit(data:any){
    this.serviceobj.createProduct(data.value).subscribe(res=>{
      alert("Posted Successfully");
      this.router.navigate(['Product']);
    },err=>{
      alert("Something went wrong");
    })
  }
}
   
  
  // productForm !: FormGroup;
  // selectedImage: File | null = null;
  // constructor(private formBuilder: FormBuilder, private productService:AppServiceService) {

  // }
  // ngOnInit() {
  //   this.productForm = this.formBuilder.group({
  //     item_name: ['', Validators.required],
  //     item_price: ['', Validators.required],
  //     item_img: ['', Validators.required]
  //   });
  // }

  // onImageSelected(event: any) {
  //   this.selectedImage = event.target.files[0];
  // }

  // onSubmit() {
  //   if (this.productForm.valid && this.selectedImage) {
  //     const formData = new FormData();
  //     formData.append('item_img', this.selectedImage);

  //     this.productService.uploadImage(formData).subscribe(
  //       (response) => {
  //         const itemData = {
  //           name: this.productForm.value.name,
  //           price: this.productForm.value.price,
  //           imageUrl: response.imageUrl // Assuming the API returns the image URL
  //         };

  //         this.productService.createProduct(itemData).subscribe(
  //           (product) => {
  //             console.log('Product created:', product);
  //             // Reset the form and other relevant data
  //           },
  //           (error) => {
  //             console.error('Error creating product:', error);
  //           }
  //         );
  //       },
  //       (error) => {
  //         console.error('Error uploading image:', error);
  //       }
  //     );
  //   }
  // }




// export class AddProductComponent implements OnInit {
  



 

 

  
// }

