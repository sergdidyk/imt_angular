import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() itemsList: {}[];
  @Output() changeStatus = new EventEmitter<number>();
  @Output() removeItem = new EventEmitter<number>();
    
  constructor() { }

  ngOnInit() {
    
  }

  onItemClicked(index) {
    this.changeStatus.emit(index);
  }

  onCloseClicked(index) {
    this.removeItem.emit(index);
  }
}
