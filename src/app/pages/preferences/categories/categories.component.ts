import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [MessageService]
})
export class CategoriesComponent implements OnInit {
  state: boolean = false;
  selectedValue = [];
  stateBtb: boolean;

  categories = [
    {"id": 1, "name": "Categoria 1"},
    {"id": 2, "name": "Categoria 2"},
    {"id": 3, "name": "Categoria 3"},
    {"id": 4, "name": "Categoria 4"},
    {"id": 5, "name": "Categoria 5"},
    {"id": 6, "name": "Categoria 6"},
    {"id": 7, "name": "Categoria 7"},
    {"id": 8, "name": "Categoria 8"},
    {"id": 9, "name": "Categoria 9"},
    {"id": 10, "name": "Categoria 10"},
    {"id": 11, "name": "Categoria 11"},
    {"id": 12, "name": "Categoria 12"}
  ];
  constructor(
    home: AppComponent
  ){
    home.state = this.state;
    this.stateBtb = true;
  }

  ngOnInit(){
    this.state = true;
  }

  checkStateBtns(){
    if(this.selectedValue.length > 0){
      this.stateBtb = false;
    }else{
      this.stateBtb = true;
    }
  }

}
