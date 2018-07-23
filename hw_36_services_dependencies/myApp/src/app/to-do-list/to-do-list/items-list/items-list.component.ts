import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDo } from '../models/ToDo';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  itemsList: ToDo[];
       
  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    this.toDoService.updateItemList.subscribe(
      (items: ToDo[]) => {
        this.itemsList = items;
      }
    );
    this.itemsList = this.toDoService.items;
  }

  itemCompleted(item: ToDo) {
    return item.toDoItemStatus === 'Completed!' ? true : false;
  }

  onItemClicked(index) {
    this.toDoService.changeStatus(index);
    this.itemCompleted(this.itemsList[index]); 
  }

  onCloseClicked(index) {
    this.toDoService.removeItem(index);
  }

  onEditClicked(e, index) {
    e.stopPropagation();
    this.toDoService.itemToEdit.emit({index: index, name: this.itemsList[index].toDoItemName});
  }
}
