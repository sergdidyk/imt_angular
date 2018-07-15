import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  title: string = 'To-Do List';
  
  toDoItemStatus: string = 'In progress';

  itemsArr: {toDoItemName: string, toDoItemStatus:string}[] = [
    { 
      toDoItemName: 'Test task 1',
      toDoItemStatus: this.toDoItemStatus
    },
    {
      toDoItemName: 'Test task 2',
      toDoItemStatus: this.toDoItemStatus
    },
    {
      toDoItemName: 'Test task 3',
      toDoItemStatus: this.toDoItemStatus
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addItem(itemsArr: object[], itemName: string, itemStatus: string): any {
    let newItemArr: object[] = [{
      toDoItemName: itemName,
      toDoItemStatus: itemStatus
    }];  
    itemsArr = itemsArr.concat(newItemArr);
    return itemsArr;
  }

  onItemAdded(itemName: string) {
    this.itemsArr = this.addItem(this.itemsArr, itemName, this.toDoItemStatus);
  }

  onChangeStatus(index: number) {
    this.itemsArr[index].toDoItemStatus = 'Completed!';
  }

  onRemoveItem(index: number) {
    this.itemsArr.splice(index, 1);
  }

}
