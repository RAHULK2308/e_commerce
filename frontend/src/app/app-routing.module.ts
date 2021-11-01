import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {UserComponent} from './user/user.component';
import {UserRoleComponent} from './user-role/user-role.component';
import {ProductComponent} from './product/product.component';
import {PurchaseComponent} from './purchase/purchase.component';
import {OrderComponent} from './order/order.component';
import {RoleComponent} from './role/role.component';
import {CartComponent} from './cart/cart.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { StockaddComponent } from './stockadd/stockadd.component';
import { RoleaddComponent } from './roleadd/roleadd.component';
import { RoleupdateComponent } from './roleupdate/roleupdate.component';
import { StockupdateComponent } from './stockupdate/stockupdate.component';
import { UserRoleAddComponent } from './user-role-add/user-role-add.component';
import { UserRoleUpdateComponent } from './user-role-update/user-role-update.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"user",component:UserComponent},
  {path:"order",component:OrderComponent},
  {path:"product",
  canActivate:[AuthGuard] ,
  component:ProductComponent},
  {path:"purchase",component:PurchaseComponent},
  {path:"cart",component:CartComponent},
  {path:"role",
  canActivate:[AuthGuard] ,
  component:RoleComponent},
  {path:"userRole",
  canActivate:[AuthGuard] ,
  component:UserRoleComponent},
  {path:"single",component:SingleproductComponent},
  {path:"userupdate",
  canActivate:[AuthGuard] ,
  component:UserupdateComponent},
  {path:"stockadd",
  canActivate:[AuthGuard] ,
  component:StockaddComponent},
  {path:"roleadd",
  canActivate:[AuthGuard] ,
  component:RoleaddComponent},
  {path:"roleupdate",
  canActivate:[AuthGuard] ,
  component:RoleupdateComponent},
  {path:"addstock"
  ,canActivate:[AuthGuard] ,
  component:StockaddComponent},
  {path:"updatestock",
  canActivate:[AuthGuard] ,
  component:StockupdateComponent},
  {path:"userroleadd",
  canActivate:[AuthGuard] ,
  component:UserRoleAddComponent},
  {path:"userroleUpdate",
  canActivate:[AuthGuard] ,
  component:UserRoleUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
