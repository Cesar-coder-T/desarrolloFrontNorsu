import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/_service/Course/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses!: any;

  skls: any[] = [,,,,,,];

  stateSkl: boolean;

  constructor(private courseService: CourseService) {
    this.stateSkl = true;
  }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(
      response => {
        this.stateSkl = false;
        this.courses = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
