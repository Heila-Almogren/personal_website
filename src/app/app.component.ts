import {Component} from '@angular/core';
import {Router, RouterModule, Routes, RoutesRecognized} from "@angular/router";
import {slideInAnimation} from "./route-animation";
import {Title} from "@angular/platform-browser";
import {filter, pairwise} from "rxjs";
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'Heila Al-Mogren';

  constructor(private titleService: Title, private meta: Meta) {

    this.titleService.setTitle(this.title);
    this.portrait = window.matchMedia("(max-width: 767px)").matches



  }

  portrait: boolean | undefined;

  ngOnInit(): void {
    this.meta.addTags([

        { name: 'description', content: 'JS & Flutter Developer' },
        { property: 'og:description', content: 'JS & Flutter Developer' },
        { property: 'og:image', content: 'src/assets/meta/image.png' },
  ]
    )
  }


  ToggleSideMenu(){
    this.portrait = !this.portrait
  }

  onResize() {
    const query = window.matchMedia("(max-width: 767px)")
    this.portrait = query.matches;
  }
}


