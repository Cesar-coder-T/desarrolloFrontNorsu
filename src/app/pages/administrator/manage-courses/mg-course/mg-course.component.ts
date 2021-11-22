import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_model/Category';
import { Course } from 'src/app/_model/Course';
import { CategoryService } from 'src/app/_service/Category/category.service';
import { CourseService } from 'src/app/_service/Course/course.service';

@Component({
  selector: 'app-mg-course',
  templateUrl: './mg-course.component.html',
  styleUrls: ['./mg-course.component.css'],
})
export class MgCourseComponent implements OnInit {
  course: Course;
  category: Category;
  stateSkl: boolean;
  stateProgressBar: boolean;
  styleProgressBar: {};

  constructor(
    private activeRoute: ActivatedRoute,
    private coursesSevice: CourseService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.course = {
      id: 0,
      name: '',
      visibility: '',
      greeting: '',
      coverPage: '',
      multimediaContent: '',
      idCategory: 0,
    };
    this.category = {
      id: 0,
      name: '',
      state: false,
    };
    this.stateSkl = true;
    this.stateProgressBar = false;
    this.styleProgressBar = {
      height: '6px',
    };
  }

  ngOnInit(): void {
    this.getByName();
  }

  getByName() {
    this.coursesSevice
      .getByName(this.activeRoute.snapshot.params.nombre)
      .subscribe(
        (response) => {
          this.stateSkl = false;
          this.course = response;
          this.categoryService.getById(this.course.idCategory).subscribe(
            (response) => {
              this.category = response;
            },
            (error) => {
              console.log(error);
            }
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }

  toDelete() {
    this.stateProgressBar = true;
    this.coursesSevice.toDelete(this.course.id).subscribe(
      (response) => {
        this.stateProgressBar = false;
        this.router.navigateByUrl('administrador/gestionar-cursos');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
