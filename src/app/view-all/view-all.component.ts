import { Component } from '@angular/core';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {
  data:any=[
    {
      "name":"ajay",
      "designation":"TMG",
      "company":"nest",
      "salary":25000
    },
    {
      "name":"abel",
      "designation":"TMG",
      "company":"cintel",
      "salary":25000
    },
    {
      "name":"antony",
      "designation":"TMG",
      "company":"nest",
      "salary":25000
    },
    {
      "name":"alfin",
      "designation":"TMG",
      "company":"gadgeon",
      "salary":25000
    },
    {
      "name":"alex",
      "designation":"TMG",
      "company":"nest",
      "salary":25000
    }
  ]

}
