import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css']
})
export class ThemeSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SwitchMode(){
    document.body.classList.toggle('light-theme');
  }

}
