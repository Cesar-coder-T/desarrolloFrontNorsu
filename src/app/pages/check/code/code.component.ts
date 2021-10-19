import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  getNumbers = [,,,,,];
  stateBtb: boolean;

  constructor() {this.stateBtb = true;}

  ngOnInit(): void {
  }

  checkEmpty(){
    let codeCheck: Byte = 0;
    this.getNumbers.forEach(element => {
      if(element != ""){
        codeCheck += 1;
      }
    });

    if(codeCheck == 6){
      this.stateBtb = false;
    }else{
      this.stateBtb = true;
    }
  }

}
