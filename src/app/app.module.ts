import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SendTextComponent } from './components/send-text/send-text.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ReceiveParamsComponent } from './components/receive-params/receive-params.component';
import { FormBasicComponent } from './components/form-basic/form-basic.component';
import { FormValidatorsComponent } from './components/form-validators/form-validators.component';
import { FormValidatorsEmailComponent } from './components/form-validators-email/form-validators-email.component';
import { FormValidatorsCustomComponent } from './components/form-validators-custom/form-validators-custom.component';
import { FromGroupComponent } from './components/from-group/from-group.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { TxComponent } from './components/communication/tx/tx.component';
import { RxComponent } from './components/communication/rx/rx.component';
import { Rx2Component } from './components/communication/rx2/rx2.component';
import { CommunicationComponent } from './components/communication/communication/communication.component';



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
    FormBasicComponent,
    FormValidatorsComponent,
    FormValidatorsEmailComponent,
    FormValidatorsCustomComponent,
    FromGroupComponent,
    FormArrayComponent,
    FormBuilderComponent,
    LifecycleComponent,
    ViewchildComponent,
    TxComponent,
    RxComponent,
    Rx2Component,
    CommunicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DashboardComponent,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
