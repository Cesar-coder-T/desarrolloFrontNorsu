import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/_service/Course/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses!: any;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(
      response => {
        this.courses = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
