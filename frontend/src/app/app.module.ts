import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { OrderComponent } from './order/order.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { RoleaddComponent } from './roleadd/roleadd.component';
import { StockaddComponent } from './stockadd/stockadd.component';
import { RoleupdateComponent } from './roleupdate/roleupdate.component';
import { StockupdateComponent } from './stockupdate/stockupdate.component';
import { SearchProductPipe } from './search-product.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRoleAddComponent } from './user-role-add/user-role-add.component';
import { UserRoleUpdateComponent } from './user-role-update/user-role-update.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CartComponent,
    UserComponent,
    RoleComponent,
    PurchaseComponent,
    OrderComponent,
    UserRoleComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    SingleproductComponent,
    UserupdateComponent,
    RoleaddComponent,
    StockaddComponent,
    RoleupdateComponent,
    StockupdateComponent,
    SearchProductPipe,
    UserRoleAddComponent,
    UserRoleUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
