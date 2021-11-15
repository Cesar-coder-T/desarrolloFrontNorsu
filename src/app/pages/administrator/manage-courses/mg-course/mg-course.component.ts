import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/_model/Course';
import { CourseService } from 'src/app/_service/Course/course.service';

@Component({
  selector: 'app-mg-course',
  templateUrl: './mg-course.component.html',
  styleUrls: ['./mg-course.component.css'],
})
export class MgCourseComponent implements OnInit {

  course: Course;
  stateSkl: boolean;
  stateProgressBar: boolean;
  styleProgressBar: {};

  constructor(
    private activeRoute: ActivatedRoute,
    private coursesSevice: CourseService,
    private router: Router
  ) {
    this.course = {
      "id": 0,
      "name": '',
      "category": '',
      "visibility": '',
      "greeting": '',
      "coverPage": '',
      "multimediaContent": ''
    };
    this.stateSkl = true;
    this.stateProgressBar = false;
    this.styleProgressBar = {
      'height': '6px',
    };
  }

  ngOnInit(): void {
    this.getByName();
  }

  getByName(){
    this.coursesSevice
      .getByName(this.activeRoute.snapshot.params.nombre)
      .subscribe(
        (response) => {
          this.stateSkl = false;
          this.course = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  toDelete(){
    this.stateProgressBar = true;
    this.coursesSevice.toDelete(this.course.id).subscribe(
      response => {
        this.stateProgressBar = false;
        this.router.navigateByUrl('administrador/gestionar-cursos');
      },
      error => {
        console.log(error);
      }
    );
  }

}
