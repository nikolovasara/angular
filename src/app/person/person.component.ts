import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  show:boolean;
  @Input('name') name!: string;
  @Output() withDetails=new EventEmitter<boolean>();
  constructor() {
    this.show=false;
   }

  ngOnInit(): void {
   
  }

  toggleDetails(){
    this.show=!this.show;
    this.withDetails.emit(this.show);
  }

}
