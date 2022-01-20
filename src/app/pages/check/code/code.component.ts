import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
})
export class CodeComponent implements OnInit {

  code: string;
  styleBtn: {};
  stateBtb: boolean;

  constructor() {
    this.code = '';
    this.styleBtn = {
      width: "17.5em",
      height: "2.5em",
      "border-radius": ".3em"
    };
    this.stateBtb = true;
  }

  ngOnInit(): void {}

  checkCode(){
    if(this.code.length == 6){
      this.stateBtb = false;
      this.styleBtn = {
        width: "17.5em",
        height: "2.5em",
        border: "none",
        "border-radius": ".3em",
        background: "#293347",
        color: "rgb(255, 255, 255)"
      };
    }else{
      this.stateBtb = true;
      this.styleBtn = {
        width: "17.5em",
        height: "2.5em",
        "border-radius": ".3em"
      };
    }
  }

}
