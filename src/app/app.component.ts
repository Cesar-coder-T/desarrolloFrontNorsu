import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: String = "Norsu";
  state: boolean;
  styleRt: string;

  constructor(
  ){
    this.state = true;
    this.styleRt = "#293347";
  }
  ngOnInit(){
  }

  getYScream():any{
    document.onscroll = function() {
      return window.scrollY;
    };
  }

  goAbout(){
    window.scroll(0, 362);
  }

}
