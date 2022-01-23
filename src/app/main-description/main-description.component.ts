import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'main-description',
  templateUrl: './main-description.component.html',
  styleUrls: ['./main-description.component.css']
})
export class MainDescriptionComponent implements OnInit {

  catFace: String;
  Laughter:String = "😸"
  Smile:String = "😺"

  constructor() {
    this.catFace = this.Smile;
  }

  ngOnInit(): void {
  }

  catLaugh(){
    this.catFace = this.Laughter;
  }

  catSmile(){
    this.catFace = this.catFace = this.Smile;
  }

  mailme() {
    // **** away scrappers!!
    let mailto = "mailto:";
    let name = "heila.almogren";
    let at = "@";
    let domain = "gmail.com";
    let subject = "?subject=Hey Heila :P";
    open(mailto+name+at+domain+subject, "_blank");
  }
}
