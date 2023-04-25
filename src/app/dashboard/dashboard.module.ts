import { Component, NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    //here goes your components for this feature
    DashboardComponent,
    SettingsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]

})

export class DashboardModule {
  constructor(){

  }
}
