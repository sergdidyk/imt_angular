import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{
  itemName: string = '';
  show: boolean = true;
  itemIdforUpdate: number;
      
  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    this.toDoService.itemToEdit.subscribe(
      (item: {index, name}) => {
        this.show = false;
        this.itemIdforUpdate = item.index;
        this.itemName = item.name;
      }
    );
  }

  onCreateItem() {
    this.toDoService.onAddItem(this.itemName);
    this.itemName = '';
  }

  onUpdateItem() {
    this.toDoService.editItem(this.itemIdforUpdate, this.itemName);
    this.show = true;
    this.itemName = '';
  }
}
