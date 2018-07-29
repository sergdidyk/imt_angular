import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, Users } from '../models/User'
import { UsersService } from '../users.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy{
  list$: Observable<Users>

  constructor(private usersService: UsersService) { }

  ngOnInit(){
    this.updateList()
  }

  ngOnDestroy(){
  }

  updateList(){
    this.list$ = this.usersService.list();
  }

  onDelete(e, id: number) {
    e.stopPropagation();
    this.usersService.delete(id)
      .subscribe(() => { this.updateList() });
  }
}
