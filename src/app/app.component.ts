import {Component} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {slideInAnimation} from "./route-animation";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'Heila Al-Mogren';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }


}


