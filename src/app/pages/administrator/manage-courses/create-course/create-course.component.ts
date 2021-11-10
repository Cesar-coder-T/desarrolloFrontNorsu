import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_model/Course';
import { CategoryService } from 'src/app/_service/Category/category.service';
import { CourseService } from 'src/app/_service/Course/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  submitted: boolean = false;

  generalities: Course;

  categories: any;

  /*image*/
  public imagePath: any;
  imgURL: any;
  public message!: string;
  sellersPermitFile: any;
  sellersPermitString!: string;
  /*image*/

  constructor(
    private catService: CategoryService,
    private courseService: CourseService
  ) {
    this.generalities = {
      id: 0,
      name: '',
      visibility: '',
      category: '',
      coverPage: '',
      greeting: '',
      multimediaContent: Math.round(Math.random() * (100 - 1) + 1) + '',
    };
  }

  ngOnInit(): void {
    this.catService.getAll().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Load the image
   */
  preview(event: any): void {
    let files: FileList = event.target.files;
    if (files.length == 0) {
      return;
    }
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Solo se permiten imagenes';
      return;
    }
    this.message = '';
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
    this.picked(event);
  }

  picked(event: any) {
    let fileList: FileList = event.target.files;
    const file: File = fileList[0];
    this.sellersPermitFile = file;
    this.handleInputChange(file);
  }

  handleInputChange(files: any) {
    let file = files;
    let pattern = /image-*/;
    let reader = new FileReader();
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    let base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    this.sellersPermitString = base64result;
  }

  createCourse() {
    this.generalities.coverPage = this.sellersPermitString;
    this.courseService.toRegister(this.generalities).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
