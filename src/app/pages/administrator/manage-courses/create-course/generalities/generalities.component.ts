import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generalities',
  templateUrl: './generalities.component.html',
  styleUrls: ['./generalities.component.css']
})
export class GeneralitiesComponent implements OnInit {

  /*image*/
  public imagePath: any;
  imgURL: any;
  public message!: string;
  sellersPermitFile: any;
  sellersPermitString!: string;
  /*image*/

  constructor() {}

  ngOnInit(): void {
  }

  preview(event:any): void{
    let files: FileList = event.target.files;
    if(files.length == 0){
      return;
    }
    var mimeType = files[0].type;
    if(mimeType.match(/image\/*/) == null){
      this.message = "Solo se permiten imagenes";
      return;
    }
    this.message = "";
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

}
