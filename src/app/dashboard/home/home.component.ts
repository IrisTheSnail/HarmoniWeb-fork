import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router'; // CLI imports router
import { playlist } from 'playlist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  playlist = playlist;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }
}
