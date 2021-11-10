import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { Category } from 'src/app/_model/Category';
import { CategoryService } from 'src/app/_service/Category/category.service';

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
  categories!: any;

  constructor(
    home: AppComponent,
    private catService: CategoryService
  ){
    home.state = this.state;
    this.stateBtb = true;
  }

  ngOnInit(){
    this.state = true;
    this.catService.getAll().subscribe(
      response => {
        this.categories = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  checkStateBtns(){
    if(this.selectedValue.length > 0){
      this.stateBtb = false;
    }else{
      this.stateBtb = true;
    }
  }

}
