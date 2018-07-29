import { RouterModule, Routes } from '@angular/router';

import { CalculatorComponent } from './calculator/calculator/calculator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';


const routes:Routes = [
  {path:'', redirectTo: '/users', pathMatch: 'full'},
  {path:'calculator', component: CalculatorComponent},
  {path:'users', loadChildren: 'src/app/users/users.module#UsersModule'},
  {path:'**', component: NotFoundComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
