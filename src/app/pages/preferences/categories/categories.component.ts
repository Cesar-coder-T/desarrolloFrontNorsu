import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  state: boolean = false;
  categories = [
    {name: "Categoría 1", state: false},
    {name: "Categoría 2", state: false},
    {name: "Categoría 3", state: false},
    {name: "Categoría 4", state: false},
    {name: "Categoría 5", state: false},
    {name: "Categoría 6", state: false},
    {name: "Categoría 7", state: false},
    {name: "Categoría 8", state: false},
    {name: "Categoría 9", state: false},
    {name: "Categoría 10", state: false},
    {name: "Categoría 11", state: false},
    {name: "Categoría 12", state: false}
  ];

  constructor(
    home: AppComponent
  ){
    home.state = this.state;
  }

  ngOnInit(){
    this.state = true;
  }
}
