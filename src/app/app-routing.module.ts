import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { ReceiveParamsComponent } from './components/receive-params/receive-params.component';
import { FormBasicComponent } from './components/form-basic/form-basic.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'receive/:id', component: ReceiveParamsComponent }, //params
  { path: 'receive', component: ReceiveParamsComponent }, //queryParams
  { path: 'form', component: FormBasicComponent },
  { path: 'lifecycle', component: LifecycleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
