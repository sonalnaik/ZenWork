import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { SubUserComponent } from './sub-user/sub-user.component';
import { AllShopsComponent } from './all-shops/all-shops.component';
import { AuthGuard } from './auth.guard';
const routes:Routes=[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, 
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  { path:'add-shop', component:AddShopComponent, canActivate: [AuthGuard]},
  { path:'subUser', component:SubUserComponent, canActivate: [AuthGuard]},
  { path:'all-shops', component:AllShopsComponent,canActivate: [AuthGuard]},
  
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
