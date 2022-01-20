import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

interface Category {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [MessageService],
})
export class CategoriesComponent implements OnInit {
  /*Categories*/
  categories: Category[];
  preferences: [];
  /*Categories*/

  /*Skip button*/
  stateBtnSkip: boolean;
  styleBtnSkip: {};
  /*Skip button*/

  /*Next button*/
  stateBtnNext: boolean;
  styleBtnNext: {};
  /*Next button*/

  constructor() {
    /*Categories*/
    this.categories = [
      {
        id: 1,
        name: 'Servicio al cliente',
        image: 'customer-service',
      },
      {
        id: 2,
        name: 'Marketing digital',
        image: 'marketing',
      },
      {
        id: 3,
        name: 'Desarrollo web',
        image: 'embedded',
      },
      {
        id: 4,
        name: 'Análisis de negocios internacionales',
        image: 'analyst',
      },
      {
        id: 5,
        name: 'Idiomas',
        image: 'languages',
      },
      {
        id: 6,
        name: 'API',
        image: 'api',
      },
      {
        id: 7,
        name: 'Hosting',
        image: 'hosting',
      },
    ];
    this.preferences = [];
    /*Categories*/

    /*Skip button*/
    this.stateBtnSkip = false;
    this.styleBtnSkip = {
      width: '11em',
      height: '3em',
      border: 'none',
      'border-radius': '.4em',
      background: 'rgb(241, 108, 68)',
      color: 'rgb(255,255,255)',
    };
    /*Skip button*/

    /*Next button*/
    this.stateBtnNext = true;
    this.styleBtnNext = {
      width: '11em',
      height: '3em',
      'border-radius': '.4em',
    };
    /*Next button*/
  }

  ngOnInit() {}

  /*Enable or disable next button*/
  stateNextButton() {
    if (this.preferences.length > 0) {
      /*Skip button*/
      this.stateBtnSkip = true;
      this.styleBtnSkip = {
        width: '11em',
        height: '3em',
        'border-radius': '.4em',
      };
      /*Skip button*/
      /*Next button*/
      this.stateBtnNext = false;
      this.styleBtnNext = {
        width: '11em',
        height: '3em',
        'border-radius': '.4em',
        background: '#293347',
        color: 'rgb(255,255,255)',
        border: 'none',
      };
      /*Next button*/
    } else {
      /*Skip button*/
      this.stateBtnSkip = false;
      this.styleBtnSkip = {
        width: '11em',
        height: '3em',
        border: 'none',
        'border-radius': '.4em',
        background: 'rgb(241, 108, 68)',
        color: 'rgb(255,255,255)',
      };
      /*Skip button*/
      /*Next button*/
      this.stateBtnNext = true;
      this.styleBtnNext = {
        width: '11em',
        height: '3em',
        'border-radius': '.4em',
      };
      /*Next button*/
    }
  }
}
