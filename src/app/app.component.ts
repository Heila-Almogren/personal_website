import {Component} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {slideInAnimation} from "./route-animation";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'personalWebsite';

  constructor() {}


}


