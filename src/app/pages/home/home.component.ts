import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  goDown() {
    if((window.screen.height > 560) && (window.screen.height <= 600)){
      window.scroll(0, 605);
    }else if((window.screen.height > 517) && (window.screen.height <= 560)){
      window.scroll(0, 560);
    }else if((window.screen.height > 472) && (window.screen.height <= 517)){
      window.scroll(0, 517);
    }else if((window.screen.height > 424) && (window.screen.height <= 472)){
      window.scroll(0, 472);
    }else{
      window.scroll(0, 649);
    }
  }
}
