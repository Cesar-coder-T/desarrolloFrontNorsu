import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wlcm',
  templateUrl: './wlcm.component.html',
  styleUrls: ['./wlcm.component.css'],
})
export class WlcmComponent implements OnInit {

  /*Load's spinner*/
  stateSpinner: boolean;
  styleSpinner: {};
  /*End load's spinner*/

  constructor(private router: Router) {
    this.stateSpinner = false;
    this.styleSpinner = {
      width: '55px',
      height: '55px',
    };
  }

  ngOnInit(): void {}

  /*Navigate to the generalities page*/
  prevPage() {
    this.router.navigate(['/administrador/crear-curso/generalidades']);
  }

  createCourse() {}
}
