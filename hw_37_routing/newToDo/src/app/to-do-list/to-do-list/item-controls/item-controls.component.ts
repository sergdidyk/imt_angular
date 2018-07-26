import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-controls',
  templateUrl: './item-controls.component.html',
  styleUrls: ['./item-controls.component.css']
})
export class ItemControlsComponent implements OnInit {
  
  itemName: string = '';
  editedId: number;
  
  constructor(
    private toDoService: ToDoService,
    private router: Router) {}

  ngOnInit() {
    this.editedId = this.toDoService.id; //get

    this.editedId === undefined || this.editedId === null ?
      this.itemName = '' 
      : 
      this.itemName = this.toDoService.items[this.editedId].toDoItemName; 
  }

  onSaveItem() {
    this.toDoService.updateItemsList(this.editedId, this.itemName);
    this.router.navigate(['/toDoList']);
    this.itemName = '';
    this.toDoService.itemId = null; //set
  }

}
