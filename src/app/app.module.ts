import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SendTextComponent } from './components/send-text/send-text.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ReceiveParamsComponent } from './components/receive-params/receive-params.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    SendTextComponent,
    ProductlistComponent,
    ReceiveParamsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
