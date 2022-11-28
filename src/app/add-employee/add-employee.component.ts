import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  name=""
  designation=""
  company=""
  salary=""


  readValues=()=>
  {
    let data:any={
      "name":this.name,
      "designation":this.designation,
      "company":this.company,
      "salary":this.salary
    }
    console.log(data)
  }


}
