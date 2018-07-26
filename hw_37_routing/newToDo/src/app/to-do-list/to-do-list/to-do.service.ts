import { Injectable, EventEmitter } from '@angular/core';
import { ToDo } from './models/ToDo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  toDoStatus: string = 'In progress';
  itemId: number;

  refreshItemList = new EventEmitter<ToDo[]>();

    items: ToDo[] = [
        new ToDo('Test task 1', this.toDoStatus),
        new ToDo('Test task 2', this.toDoStatus),
        new ToDo('Test task 3', this.toDoStatus)
    ];

  constructor() { }

  set editedId(id: number) {
    this.itemId = id;
  } 

  get id() {
    return this.itemId;
  }
  
  addItem(itemsArr: ToDo[], name: string): any {
    const newItemArr: ToDo[] = [{
        toDoItemName: name,
        toDoItemStatus: this.toDoStatus
    }];  
    itemsArr = itemsArr.concat(newItemArr);
    return itemsArr;
  }

  editItem(id: number, editedName: string) {  
    this.items[id].toDoItemName = editedName;
    this.items[id].toDoItemStatus = this.toDoStatus;     
  }

  updateItemsList(id: number, name: string) {
    id === undefined || id === null ?
    this.items = this.addItem(this.items, name) 
    :
    this.editItem(id, name);

    this.refreshItemList.emit(this.items);
  }

  changeStatus(id: number) {
    this.items[id].toDoItemStatus = 'Completed!';
  }

  removeItem(id: number) {
    this.items.splice(id, 1);
  }
}
