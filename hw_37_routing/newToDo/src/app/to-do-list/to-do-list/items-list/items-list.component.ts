import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToDo } from '../models/ToDo';
import { ToDoService } from '../to-do.service';
import { Subscription } from '../../../../../node_modules/rxjs';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit, OnDestroy {
  
  itemsList: ToDo[] = [];
  refreshSubscription: Subscription
  
  constructor(
    private toDoService: ToDoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.refreshSubscription = this.toDoService.refreshItemList
      .subscribe(
        (items: ToDo[]) => {
          this.itemsList = items;
        }
      );
    this.itemsList = this.toDoService.items;
  }

  ngOnDestroy(): void {
    this.refreshSubscription.unsubscribe();   
  }

  itemCompleted(item: ToDo) {
    return item.toDoItemStatus === 'Completed!' ? true : false;
  }

  onAdd() {
    this.router.navigate(['toDoControls'], {relativeTo: this.route});
  }

  onEdit(id: number) {
    this.router.navigate(['toDoControls'], {relativeTo: this.route});
    this.toDoService.itemId = id; //set 
  }

  onViewInfo(id: number) {
    this.router.navigate(['toDoInfo', id], {relativeTo: this.route});
  }

  onChangeStatus(id: number) {
    this.toDoService.changeStatus(id);
  }

  onDelete(id: number) {
    this.toDoService.removeItem(id);
  }
}
