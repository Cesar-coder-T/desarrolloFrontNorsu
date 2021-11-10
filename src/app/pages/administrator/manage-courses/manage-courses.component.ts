import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/_service/Course/course.service';

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

  constructor(private coursesSevice: CourseService) {
  }

  ngOnInit(): void {
    this.coursesSevice.getAll().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
