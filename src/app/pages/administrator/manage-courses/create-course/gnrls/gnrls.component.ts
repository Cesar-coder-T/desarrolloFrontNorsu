import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

/*Model to select*/
interface Select {
  id: number;
  name: string;
  disabled: boolean;
}

@Component({
  selector: 'app-gnrls',
  templateUrl: './gnrls.component.html',
  styleUrls: ['./gnrls.component.css'],
})
export class GnrlsComponent implements OnInit {

  /*Stepper's state*/
  submitted: boolean = false;

  /*Visibility*/
  visibilitySelect: Select[];
  visibilitySelected!: Select;
  /*Visibility*/

  /*Category*/
  categorySelect: Select[];
  categorySelected!: Select;
  /*Category*/

  /*Styles select*/
  stylesSelect: {};

  /*Front image*/
  UrlFrontImage!: string;
  styleImgCourse: string;
  styleDeleteIcon: string;
  /*Front image*/

  /*Image 64 bits*/
  imagePath: any;
  imgURL: any;
  message!: string;
  sellersPermitFile: any;
  sellersPermitString!: string;
  /*Image 64 bits*/

  constructor(private router: Router) {
    this.visibilitySelect = [
      { id: 0, name: 'Selección de visibilidad del curso', disabled: true },
      { id: 1, name: 'Público', disabled: false },
      { id: 2, name: 'Privado', disabled: false },
    ];
    this.categorySelect = [
      { id: 0, name: 'Selección de categoría del curso', disabled: true },
      { id: 1, name: 'Categoría 1', disabled: false },
      { id: 2, name: 'Categoría 2', disabled: false },
      { id: 3, name: 'Categoría 3', disabled: false },
    ];
    this.stylesSelect = {
      'width': '40em',
      'height': '3.5em',
      'display': 'flex',
      'align-items': 'center',
      'text-align': 'center',
      'margin-bottom': '2em',
      'border-radius': '.4em',
      'border': '.15em solid #293347'
    };
    this.styleImgCourse = "hidden";
    this.styleDeleteIcon = "hidden";
  }

  ngOnInit(): void {
    if(window.screen.width <= 750){
      this.stylesSelect = {
        "width": "30em",
        'height': '3.5em',
        'display': 'flex',
        'align-items': 'center',
        'text-align': 'center',
        'margin-bottom': '2em',
        'border-radius': '.4em',
        'border': '.15em solid #293347'
      };
    }
  }

  /*Load the image*/
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
  /*End load the image*/

  /*Delete icon*/
  showDeleteIcon(){
    this.styleDeleteIcon = "visible";
    this.styleImgCourse = "visible";
    if(this.UrlFrontImage == ''){
      this.styleDeleteIcon = "hidden";
      this.styleImgCourse = "hidden";
    }
  }
  deleteUrlImage(){
    this.UrlFrontImage = '';
    this.styleDeleteIcon = "hidden";
    this.styleImgCourse = "hidden";
  }
  /*End delete icon*/

  /*Navigate to the welcome page*/
  nextPage() {
    this.router.navigate(['/administrador/crear-curso/bienvenida']);
    this.submitted = true;
  }
}
