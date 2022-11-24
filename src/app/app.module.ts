import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { ViewAllComponent } from './view-all/view-all.component';



const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"add employee",
    component:AddEmployeeComponent
  },
  {
    path:"search employee",
    component:EmployeeSearchComponent
  },
  {
    path:"view employee",
    component:ViewAllComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    EmployeeSearchComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
