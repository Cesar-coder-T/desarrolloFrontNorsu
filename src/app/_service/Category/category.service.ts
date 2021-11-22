import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/_model/Category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string;

  constructor( private _http: HttpClient) {
    this.url = `${environment.HOST}/categories`;
  }

  getAll(){
    return this._http.get<Category>(`${this.url}/getAll`);
  }

  getById(idCategory: number){
    return this._http.get<Category>(`${this.url}/getById/${idCategory}`);
  }

}
