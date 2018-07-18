import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Input() itemsList: {toDoItemName: string, toDoItemStatus:string}[];
  @Output() changeStatus = new EventEmitter<number>();
  @Output() removeItem = new EventEmitter<number>();
    
    
  constructor() { }

  ngOnInit() {
    
  }

  itemCompleted(item: {toDoItemName: string, toDoItemStatus:string}) {
    return item.toDoItemStatus === 'Completed!' ? true : false;
  }

  onItemClicked(index) {
    this.changeStatus.emit(index);
    this.itemCompleted(this.itemsList[index]); 
  }

  onCloseClicked(index) {
    this.removeItem.emit(index);
  }
}
