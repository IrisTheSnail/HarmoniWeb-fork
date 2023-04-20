import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    //here goes your components for this feature
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]

})

export class DashboardModule {
  constructor(){

  }
}
