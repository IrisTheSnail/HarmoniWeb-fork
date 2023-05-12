import { Component } from '@angular/core';
import { User } from 'src/app/controller/services/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  currentItem!: string;

}
