import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  itemName: string = '';
      
  constructor() { }

  ngOnInit() {
  }

  onCreateItem() {
    this.itemAdded.emit(this.itemName);
    this.itemName = '';
  }
}
