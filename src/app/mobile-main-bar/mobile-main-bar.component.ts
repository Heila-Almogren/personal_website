import { Component, OnInit } from '@angular/core';
import {Router, RoutesRecognized} from "@angular/router";
import {filter, pairwise} from "rxjs";
import { faBars } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-mobile-main-bar',
  templateUrl: './mobile-main-bar.component.html',
  styleUrls: ['./mobile-main-bar.component.css']
})
export class MobileMainBarComponent implements OnInit {

  prev: String = "/mobileMenu";
  cur:String = "/";
  faBars = faBars;
  constructor(private router: Router) {

    this.router.events
      .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {

        this.prev = events[0].urlAfterRedirects;
        this.cur = events[1].urlAfterRedirects;

      });

  }




  ngOnInit(): void {
  }

}
