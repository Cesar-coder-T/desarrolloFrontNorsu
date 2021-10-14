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
  categories = [
    {name: "Categoría 1"},
    {name: "Categoría 2"},
    {name: "Categoría 3"},
    {name: "Categoría 4"},
    {name: "Categoría 5"},
    {name: "Categoría 6"},
    {name: "Categoría 7"},
    {name: "Categoría 8"},
    {name: "Categoría 9"},
    {name: "Categoría 10"},
    {name: "Categoría 11"},
    {name: "Categoría 12"}
  ];

  constructor(
    home: AppComponent,
    private messageService: MessageService
  ){
    home.state = this.state;
  }

  ngOnInit(){
    this.state = true;
  }

}
