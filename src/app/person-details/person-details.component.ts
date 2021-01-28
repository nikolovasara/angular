import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  details={
    Name:"Sara Nikolova",
    Company:"Endava",
    Position:"Junior Developer",
    Tech:"DotNet",
    Age:22
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  keepOrder = (a : any,b:any) => {
    return a;
  }

}
