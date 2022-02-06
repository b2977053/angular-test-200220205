import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-travel-add',
  templateUrl: './travel-add.component.html',
  styleUrls: ['./travel-add.component.css']
})
export class TravelAddComponent implements OnInit {
  dataName: any;
  dataAddress: any;
  dataTel: any;

  @Output() AddItem = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  addItem(){

    this.AddItem.emit({
      'id':'0',
      'name': this.dataName,
      'address': this.dataAddress,
      'tel': this.dataTel,
    });
  }

}
