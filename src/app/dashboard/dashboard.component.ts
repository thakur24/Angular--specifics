import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  prodlen:number = 0;
   
  constructor(private prod:ProductDataService) { }

  ngOnInit(): void {
    this.prodlen = this.prod.getAllProductlength();
  }

}
