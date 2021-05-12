import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormArray,FormBuilder, Validators } from "@angular/forms";
import { ProductDataService } from "../product-data.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-cretaeproduct',
  templateUrl: './cretaeproduct.component.html',
  styleUrls: ['./cretaeproduct.component.css']
})
export class CretaeproductComponent implements OnInit {
   productFormGroup:any;
  constructor(private fb:FormBuilder,private productDataService:ProductDataService,private router:Router) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name : this.fb.control('',Validators.required),
      price : this.fb.control(''),
      description : this.fb.control('')
    })
  }
  submitForm(){
    console.log(this.productFormGroup.value);
    this.productDataService.addProduct(this.productFormGroup.value)
    this.productFormGroup.reset()
    this.router.navigate(['productlist'])
  }

}
