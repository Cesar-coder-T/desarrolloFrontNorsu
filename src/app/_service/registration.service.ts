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
  url: string;

  /**
   * Constructor de la clase "RegistroService".
   * @param http
   */
  constructor(private http: HttpClient) {
    this.url = `${environment.HOST}/users`;
  }
  /**
   * Method that get the request's Json
   * @param user
   * @returns request
   */
  registro(user: Registration) {
    return this.http.post<Registration>(`${this.url}/toRegister`, user);
  }

  login(nick:String, psw:String){
    return this.http.get<any>(`/api/sesiones/iniciar/${nick}/${psw}`);
  }

  logout(token: string){
    return this.http.get<any>(`/api/sesiones/finalizar`, {
      headers: {
        'Authorization': token
      }
    });
  }
}
