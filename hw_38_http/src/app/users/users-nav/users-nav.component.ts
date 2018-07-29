import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-nav',
  templateUrl: './users-nav.component.html',
  styleUrls: ['./users-nav.component.css']
})
export class UsersNavComponent {
  @Input() page: string
  @Output() pageChange = new EventEmitter<string>()

  constructor() { }

  isActive(pageToCheck: string): boolean{
    return this.page === pageToCheck;
  }

  changePage(pageToGo: string): void{
    this.pageChange.emit(pageToGo);
  }

}
