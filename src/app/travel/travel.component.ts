import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  @Input() list: any;
  @Output() ChangeItem = new EventEmitter<number>();
  @Output() DelItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeItem(i: number){
    this.ChangeItem.emit(i);
  }
  deletItem(i: string){
    this.DelItem.emit(i);
  }

}
