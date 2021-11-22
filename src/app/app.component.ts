import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: String = "Norsu";
  state: boolean;

  constructor(
  ){
    this.state = true;
  }
  ngOnInit(){
  }

  getYScream():any{
    document.onscroll = function() {
      return window.scrollY;
    };
  }

  goHome(){
    window.scroll(0, 0);
  }

  goAbout(){
    window.scroll(0, 362);
  }

}
