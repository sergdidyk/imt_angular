import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ItemsListComponent } from './to-do-list/items-list/items-list.component';
import { AddItemComponent } from './to-do-list/add-item/add-item.component';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ToDoListComponent
  ],
  declarations: [ToDoListComponent, ItemsListComponent, AddItemComponent]
})
export class ToDoListModule { }
