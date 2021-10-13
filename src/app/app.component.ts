import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  state: boolean;
  constructor(){
    this.state = true;
  }
  ngOnInit(){
    document.onscroll = function() {
      console.log("Vertical: " + window.scrollY);
    };
  }
}
