import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AdministratorComponent } from '../administrator.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

interface Category {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css'],
})
export class ManageCategoriesComponent implements OnInit {
  /*Text filter*/
  inputFilter: string;
  /*Define the visibility of the filter's delete icon*/
  visibilityIconClr: string;
  
  /*Skeleton*/
  skeletons: any[];
  stateSkeleton: boolean;
  /*Skeleton*/

  /*Categories*/
  categories: Category[];
  stateCategory: boolean;
  /*Categories*/

  constructor(
    private admin: AdministratorComponent,
    public dialog: MatDialog,
    private messageService: MessageService
  ) {
    this.inputFilter = '';
    this.visibilityIconClr = 'hidden';
    this.skeletons = [,,,,,,,,];
    this.stateSkeleton = true;
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
    this.stateCategory = false;
  }

  ngOnInit(): void {}

  /*Hide other options menu*/
  hiddenOtherOptions() {
    if (this.admin.visibilityOtherOptions == 'block') {
      this.admin.visibilityOtherOptions = 'none';
      this.admin.iconOther = 'more_horiz';
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

  openDialog(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        console.log(`Se eliminó la categoría con el id ${id}`);
        this.messageService.add({
          severity: 'success',
          summary: 'Proceso satisfactorio',
          detail: 'Se eliminó la categoría.',
        });
      } else {
        console.log('Para que presionó el botón');
      }
    });
  }
}
