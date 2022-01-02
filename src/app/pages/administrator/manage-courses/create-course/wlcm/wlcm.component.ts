import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wlcm',
  templateUrl: './wlcm.component.html',
  styleUrls: ['./wlcm.component.css']
})
export class WlcmComponent implements OnInit {

  /*Load's spinner*/
  stateSpinner: boolean;
  styleSpinner: {};
  /*End load's spinner*/

  /*Front image*/
  UrlFrontImage!: string;
  styleImgCourse: string;
  styleDeleteIcon: string;
  /*Front image*/

  constructor(private router: Router) {
    this.stateSpinner = false;
    this.styleSpinner = {
      width: '55px',
      height: '55px'
    };
    this.styleImgCourse = "none";
    this.styleDeleteIcon = "hidden";
  }

  ngOnInit(): void {
  }

  /*Delete icon*/
  showDeleteIcon(){
    this.styleDeleteIcon = "visible";
    this.styleImgCourse = "block";
    if(this.UrlFrontImage == ''){
      this.styleDeleteIcon = "hidden";
      this.styleImgCourse = "none";
    }
  }
  deleteUrlImage(){
    this.UrlFrontImage = '';
    this.styleDeleteIcon = "hidden";
    this.styleImgCourse = "none";
  }
  /*End delete icon*/

  /*Navigate to the generalities page*/
  prevPage() {
    this.router.navigate(['/administrador/crear-curso/generalidades']);
  }

  createCourse() {}

}
