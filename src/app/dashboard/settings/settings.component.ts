import { Component } from '@angular/core';
import { User } from '../../controller/models/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  currentItem!: string;

}
