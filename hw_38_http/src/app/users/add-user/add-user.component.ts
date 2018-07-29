import { Component } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: User = new User;

  constructor(
    protected usersService: UsersService, 
    private router: Router,
    protected route: ActivatedRoute
  ) { }

  closeForm(){
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  onFormSave(user: User){
    this.usersService.set(user).subscribe(() => this.closeForm());
  }

  onFormCancel(){
    this.closeForm();
  }
}
