import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_model/Course';
import { CourseService } from 'src/app/_service/Course/course.service';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.css']
})
export class ShowCoursesComponent implements OnInit {

  courses!: any;

  constructor(private coursesSevice: CourseService) { }

  ngOnInit(): void {
    this.coursesSevice.getAll().subscribe(
      response => {
        this.courses = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
