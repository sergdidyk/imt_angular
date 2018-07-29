import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../users.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent extends AddUserComponent implements OnInit {
  user: User = new User;
  user$: Observable<User>;

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.user$ = this.route.paramMap.pipe(
      switchMap((param: ParamMap) => this.usersService.get(+param.get('id'))),
      startWith(new User)
    )
  }

}
