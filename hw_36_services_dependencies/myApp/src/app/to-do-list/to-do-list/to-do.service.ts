import { Injectable,  EventEmitter } from "@angular/core";

import { ToDo } from "./models/ToDo";


@Injectable() 
export class ToDoService {
    toDoStatus: string = 'In progress';

    items: ToDo[] = [
        new ToDo('Test task 1', this.toDoStatus),
        new ToDo('Test task 2', this.toDoStatus),
        new ToDo('Test task 3', this.toDoStatus)
    ];

    updateItemList = new EventEmitter<ToDo[]>();
    itemToEdit = new EventEmitter<object>();

    addItem(itemsArr: object[], itemName: string, itemStatus: string): any {
        const newItemArr: object[] = [{
            toDoItemName: itemName,
            toDoItemStatus: itemStatus
        }];  
        itemsArr = itemsArr.concat(newItemArr);
        return itemsArr;
    }

    onAddItem(itemName: string) {
        this.items = this.addItem(this.items, itemName, this.toDoStatus);
        this.updateItemList.emit(this.items);
    }

    editItem(index: number, updatedItemName: string) {  
        this.items[index].toDoItemName = updatedItemName;
        this.items[index].toDoItemStatus = this.toDoStatus;     
        this.updateItemList.emit(this.items);
    }

    changeStatus(index: number) {
        this.items[index].toDoItemStatus = 'Completed!';
    }

    removeItem(index: number) {
        this.items.splice(index, 1);
    }
}