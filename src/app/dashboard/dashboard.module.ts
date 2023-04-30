import { Component, NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { TimeConversionPipe } from '/media/snail/D0044E7D044E6716/Users/PC/Mes documents/ENSIAS/S4, somehow/project JEE - android/HarmoniWeb/src/app/pipes/time-conversion.pipe';


import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

const modules = [
  MatButtonModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule
];

@NgModule({
  declarations: [
    //here goes your components for this feature
    DashboardComponent,
    SettingsComponent,
    HomeComponent,
    PlayerComponent,
    TimeConversionPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    modules,
  ],
  exports: [
    modules,
  ],
  providers: [
    TimeConversionPipe
  ]
})

export class DashboardModule {
  constructor(){

  }
}
