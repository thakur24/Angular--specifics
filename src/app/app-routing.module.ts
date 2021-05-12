
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { CretaeproductComponent } from './cretaeproduct/cretaeproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "product/:id",
    component: ProductsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'productlist',
    component: ProductlistComponent
  },
  {
    path: 'createproduct',
    component: CretaeproductComponent
  },
  {
    path: 'editproduct',
    component: EditproductComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
