import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Registration } from '../_model/registration';

/**
 * Override method of Injectable class
 */
@Injectable({
  providedIn: 'root'
})
/**
 * Class that catches and send to database the register information 
 * @autor César Téllez
 * @autor Juan Páez
 * @since 1.0.0
 * @version 1.0.0
 */
export class RegistrationService {
  /**
     * Stores the path of the http request
     */
  url: string = `${environment.HOST}/colaboradores/registrar`;

  /**
   * Constructor de la clase "RegistroService".
   * @param http
   */
  constructor(private http: HttpClient) { }
  /**
   * Method that get the request's Json  
   * @param user
   * @returns request
   */
  registro(user: Registration) {
    return this.http.post<string>(`${this.url}/Registro`, user);
  }
}