import { Component, Input } from '@angular/core';
import { playlist } from 'playlist';

@Component({
  selector: 'app-image-insert',
  templateUrl: './image-insert.component.html',
  styleUrls: ['./image-insert.component.scss'],
})
export class ImageInsertComponent {
[x: string]: any;
  name = 'Angular 4';
  url : string | ArrayBuffer | null | undefined;
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result;
      }
    }
  }
  public delete(){
    this.url = null;
  }


}
