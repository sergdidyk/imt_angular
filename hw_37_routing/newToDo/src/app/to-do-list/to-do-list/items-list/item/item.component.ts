import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../../to-do.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  id: number;
  idToShow: number;
  name: string;
  status: string;
  showInfo: boolean = true;

  constructor(
    private toDoService: ToDoService,
    private route: ActivatedRoute,
    private router: Router) { }

  showDetails(id: number) {
    this.name = this.toDoService.items[id].toDoItemName;
    this.status = this.toDoService.items[id].toDoItemStatus;
    this.idToShow = +this.id + 1;
  }
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  
    this.toDoService.items[this.id] === undefined ? 
      this.showInfo = false 
      : 
      this.showDetails(this.id);
  }

  onGoBack() {
    this.router.navigate(['/toDoList']);
  }

}
