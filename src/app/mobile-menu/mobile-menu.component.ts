import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {

  constructor(private location: Location) {

  }

  ngOnInit(): void {
  }

  onResize() {
    const query = window.matchMedia("(max-width: 767px)")
    if(!query.matches){
      this.location.back();
    }
  }

}
