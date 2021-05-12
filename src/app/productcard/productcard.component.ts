import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductDataService} from "../product-data.service"
@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
 @Input() productData:any ={};
 productObj:any={};
  constructor(private activatedRoute:ActivatedRoute,private ds3:ProductDataService) { }

  ngOnInit(): void {
    this.productObj=this.ds3.getProductById(this.activatedRoute.snapshot.params.id)
  }
  deleteObj(i:number){
    this.ds3.removeForm(i);
  }

}
