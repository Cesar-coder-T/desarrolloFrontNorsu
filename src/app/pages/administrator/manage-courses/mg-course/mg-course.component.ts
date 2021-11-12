import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/_model/Course';
import { CourseService } from 'src/app/_service/Course/course.service';

@Component({
  selector: 'app-mg-course',
  templateUrl: './mg-course.component.html',
  styleUrls: ['./mg-course.component.css'],
})
export class MgCourseComponent implements OnInit {
  course: Course;

  constructor(
    private activeRoute: ActivatedRoute,
    private coursesSevice: CourseService
  ) {
    this.course = {
      "id": 0,
      "name": '',
      "category": '',
      "visibility": '',
      "greeting": '',
      "coverPage": '',
      "multimediaContent": ''
    }
  }

  ngOnInit(): void {
    this.getByName();
  }

  getByName(){
    this.coursesSevice
      .getByName(this.activeRoute.snapshot.params.nombre)
      .subscribe(
        (response) => {
          this.course = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
