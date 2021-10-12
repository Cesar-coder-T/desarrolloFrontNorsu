import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'desarrollo-front-Norsu';
  ngOnInit(){
    document.onscroll = function() {
      console.log("Vertical: " + window.scrollY);
    };
  }
}
