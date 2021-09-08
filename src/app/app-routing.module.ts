import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { CheckoutsuccessComponent } from './component/checkoutsuccess/checkoutsuccess.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  // {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'checkoutsuccess',component:CheckoutsuccessComponent},
  {path:'products',component:CheckoutsuccessComponent},
  {path:'',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

