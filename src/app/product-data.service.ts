import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  data = [
    {
    id : 1,
    name : "product1",
    image : "http://placehold.it/200x200",
    description : "Description here",
    price : 20
    },
    {
      id : 2,
      name : "product2",
      image : "http://placehold.it/200x200",
      description : "Description here",
      price : 30
    },
      {
        id : 3,
        name : "product3",
        image : "http://placehold.it/200x200",
        description : "Description here",
        price : 40
        },
      {
          id : 4,
          name : "product4",
          image : "http://placehold.it/200x200",
          description : "Description here",
          price : 50
       },
        {
          id : 5,
          name : "product5",
          image : "http://placehold.it/200x200",
          description : "Description here",
          price : 80
          }         

  ]

  constructor() { }

  getAllProducts():Array<Object>{
    return this.data;
  }

  getProductById(id:number){
    return this.data.find(p => p.id == id);
  }

  getAllProductlength(){
    return this.data.length
  }

  addProduct(dataObj:any){
    dataObj.id = this.data.length + 1;
    dataObj.image = "http://placehold.it/200x200";
    this.data.push(dataObj)
  }

  removeForm(i:number){
    this.data.splice(i,1)
  }
}

