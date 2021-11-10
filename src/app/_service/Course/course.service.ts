import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/_model/Course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url: string;

  constructor(private _http: HttpClient) {
    this.url = `${environment.HOST}/courses`;
  }

  getAll(){
    return this._http.get<Course>(`${this.url}/getAll`);
  }

  toRegister(course: Course){
    return this._http.post<Course>(`${this.url}/toRegister`, course);
  }

}
