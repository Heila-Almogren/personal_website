import { Component, OnInit } from '@angular/core';
import {filter, pairwise} from "rxjs";
import {Router, RoutesRecognized} from "@angular/router";

@Component({
  selector: 'main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent implements OnInit {



  constructor() {

  }

  ngOnInit(): void {
  }

}
