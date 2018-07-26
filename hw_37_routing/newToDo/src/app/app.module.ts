import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { ToDoListComponent } from './to-do-list/to-do-list/to-do-list.component';
import { ItemControlsComponent } from './to-do-list/to-do-list/item-controls/item-controls.component';
import { ItemComponent } from './to-do-list/to-do-list/items-list/item/item.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/toDoList', pathMatch: 'full' },
  { path: 'toDoList', component:  ToDoListComponent },
  { path: 'toDoList/toDoControls', component:  ItemControlsComponent },
  { path: 'toDoList/toDoInfo', component:  ItemComponent },
  { path: 'toDoList/toDoInfo/:id', component:  ItemComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ToDoListModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
