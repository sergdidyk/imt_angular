import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  itemName: string = '';
  allowCreateItem: boolean = false;
    
  constructor() { }

  ngOnInit() {
  }

  onEnterItemName(e) {
    this.itemName = e.target.value;
    this.itemName !== '' ? this.allowCreateItem = true : this.allowCreateItem = false;
  }

  onCreateItem() {
    this.itemAdded.emit(this.itemName);
    this.itemName = '';
    this.allowCreateItem = false;
  }
}
