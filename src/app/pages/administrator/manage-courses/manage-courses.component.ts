import { Component, OnInit, ViewChild } from '@angular/core';
import { AdministratorComponent } from '../administrator.component';

/*Model to dropdown's options*/
interface Filter {
  id: number;
  name: string;
}

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css'],
})
export class ManageCoursesComponent implements OnInit {
  /*Text filter*/
  inputFilter: string;

  /*Dropdown's options*/
  filter: Filter[];
  /*Stores dropdown option*/
  selectedFilter!: Filter;
  /*Customize select filter*/
  stylesSelectFilter: {};

  /*Define the visibility of the filter's delete icon*/
  visibilityIconClr: string;

  constructor(private admin: AdministratorComponent) {
    this.filter = [
      { id: 1, name: 'Todos' },
      { id: 2, name: 'Públicos' },
      { id: 3, name: 'Privados' },
    ];
    this.selectedFilter = {
      id: 1,
      name: 'Todos',
    };
    this.stylesSelectFilter = {
      width: '10em',
      height: '2em',
      display: 'flex',
      'align-items': 'center',
      color: '#293347',
      border: '2px solid #293347',
      outline: 'none',
    };
    this.inputFilter = '';
    this.visibilityIconClr = 'hidden';
  }

  ngOnInit(): void {}

  /*Hide other options menu*/
  hiddenOtherOptions() {
    if (this.admin.visibilityOtherOptions == 'block') {
      this.admin.visibilityOtherOptions = 'none';
      this.admin.iconOther = "more_horiz";
    }
  }
  /*Hide other options menu*/

  /*Method that allows enable the visibility of the icon to delete*/
  enableDeleteBtnInput() {
    this.visibilityIconClr = 'visible';
    if (this.inputFilter == '') {
      this.visibilityIconClr = 'hidden';
    }
  }

  /*Method that allows clear the input filter*/
  clearInput() {
    this.inputFilter = '';
    this.visibilityIconClr = 'hidden';
  }
}
