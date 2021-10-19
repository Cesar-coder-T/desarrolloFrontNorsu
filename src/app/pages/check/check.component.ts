import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  stateAux: boolean = true;

  constructor(
    stateTB: AppComponent
  ) {
    this.stateAux = false;
    stateTB.state = this.stateAux;
  }

  ngOnInit(): void {
  }



}
