import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements OnInit {

  courses: any;

  filter = [
    {"id": 1, "name": "Todos"},
    {"id": 2, "name": "Públicos"},
    {"id": 3, "name": "Privados"}
  ];

  constructor() {
  }

  ngOnInit(): void {}

}
