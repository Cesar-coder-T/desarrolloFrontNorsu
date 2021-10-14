import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit{
  stateBtb: boolean;

  constructor(){
    this.stateBtb = true;
  }
  ngOnInit(){
  }
}
