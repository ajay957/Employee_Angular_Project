import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';



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
  },
  {
    path:"edit employee",
    component:EditEmployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    EmployeeSearchComponent,
    ViewAllComponent,
    EditEmployeeComponent
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
