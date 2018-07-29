import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http/';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';
import { CalculatorComponent } from './calculator/calculator/calculator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
