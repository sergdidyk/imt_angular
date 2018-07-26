import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ItemsListComponent } from './to-do-list/items-list/items-list.component';
import { ItemComponent } from './to-do-list/items-list/item/item.component';
import { ItemControlsComponent } from './to-do-list/item-controls/item-controls.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ToDoListComponent
  ],
  declarations: [
    ToDoListComponent, 
    ItemsListComponent, 
    ItemComponent, 
    ItemControlsComponent
  ]
})
export class ToDoListModule { }
