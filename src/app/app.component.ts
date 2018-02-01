import { Component } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data : string = "";

  public sendDataToGrid(message:string)
  {
    let nowTime : Date = new Date();
    let now = moment().format("YYYY/MM/DD H:m:s")
    this.data = now + " " + message;
  }
}
