import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';
import { Registration } from 'src/app/_model/registration';
import { RegistrationService } from 'src/app/_service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
/**
 * Class of RegistrationComponent
 * @autor César Téllez
 * @autor Juan Páez
 * @since 1.0.0
 * @version 1.0.0
 */
export class RegistrationComponent implements OnInit {

  /**
   * Form responsible for storing the contributor's record attributes
   */
   registrationForm!: FormGroup;
  contrasena1!: string;
  contrasena2!: string;
  mensaje!: string;
  mensaje2!: string;
  colorVar!: string;
  colorVar2!: string;
  validador!: number;
  correo!: string;
  empresa: string = "Empresa prueba";
  value1!: boolean;
  value2!: boolean;
  captchaValue!: boolean;

  hide = true;
  /**
   * Constructor of class "registrationComponent"
   * @param router redirects user
   * @param status shows the charging status of the component
   */
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private status: AppComponent,
    private apiRegistration: RegistrationService
  ) {
    this.value1=false;
    this.value2=false;
    this.captchaValue=false;
    status.state=false;
    };
  /*
    showResponse(response: any) {
      console.log(response);
  }*/
    showResponse(event: any) {
        this.captchaValue=true;
    }
  /**
     * 
     * A method that runs immediately after the constructor and activates the component content.
     * Note: This method loads the validations of the registration form.
     */
  ngOnInit(): void {
    this.validador = 0;
    this.registrationForm = new FormGroup({
      firstNames: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      lastNames: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      electronicMail: new FormControl('', [Validators.required, Validators.email, Validators.minLength(9), Validators.maxLength(90)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      referralCode: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
      dateBirth: new FormControl(new Date().toDateString()),
      val1: new FormControl(false,Validators.requiredTrue),
      val2: new FormControl(false,Validators.requiredTrue)
    });
  }
  /**
   * Method that captures and loads the information from 
   * the registration form into the user object. Finally, 
   * it saves the user's information in the database.
   */
  onRegistro() {
    let user = new Registration;
    if (this.contrasena1 == this.contrasena2) {
      this.validador = 1;
      user.firstNames = this.registrationForm.value['firstNames'];
      user.lastNames = this.registrationForm.value['lastNames'];
      if (this.correo.indexOf('.') !== -1) {
        user.email = this.registrationForm.value['electronicMail'];
      }
      if (this.correo.indexOf('.') == -1) {
        user.email = this.registrationForm.value['electronicMail'] + '.com';
      }
      user.dateBirth = this.registrationForm.value['dateBirth'];
      user.password = this.registrationForm.value['password'];
      //user.idCard = String(Math.random().toFixed(5));
      user.idCard = String(Math.floor(Math.random()*232300394)+562999);
      if(!this.captchaValue){
        this.validador = 2;
      }
    }
    if (this.validador == 1) {
      console.log(user);
      this.apiRegistration.registro(user).subscribe(data => {
        this.snackBar.open('¡¡Usuario registrado satisfactoriamente!!', 'Info', {
          duration: 2000,
        });
        this.router.navigate(['preferencias']);

      },
        erro => {
          if (erro.status == 401) {
            this.snackBar.open('Error 401', 'Advertencia', {
              duration: 2000,
            });
          } else if (erro.status == 400) {
            this.snackBar.open(erro.error.message, 'Advertencias', {
              duration: 2000,
            })
          } else
            this.router.navigate([`/error/${erro.status}/${erro.statusText}`])
        }

      );
    }
    else {
      if(this.validador == 2){
        delay(1000);
      this.snackBar.open('¡¡Error: No soy un robot es obligatorio!!', '', {
        duration: 2000,
      });
      }else{
        delay(1000);
      this.snackBar.open('¡¡Datos erróneos: Debe confirmar la contraseña correctamente!!', '', {
        duration: 2000,
      });
      }
    }
  }

  
  /**
   * Método encargado de evaliuar si los valores de contraseña
   * y confirmar contraseña ingresados por el usuario, coinciden o no.
   * Nota: Envía mensaje a la interfaz en ambos casos.
   */
  equalPasswordControl(): void {

    if (this.contrasena2 === this.contrasena1) {
      this.colorVar = 'green';
      this.mensaje = 'Las contraseñas coinciden.';
    } else {
      this.colorVar = 'red';
      this.mensaje = 'Error: Las contraseñas no coinciden.';
    }
  }

  /**
   * Método que calcula la seguridad de la contraseña
   * ingresada por el usuario, basándose en la longitud
   * y las características de la misma.
   * Nota: Envía mensaje a la interfaz informando el
   *  nivel de seguridad.
   */
  securityPasswordControl(): void {

    if (this.validationSecurity(this.contrasena1) == 0 && this.contrasena1.length <=15){
      this.colorVar2 = '#ff0000';
      this.mensaje2 = 'Seguridad: Baja';
    }else{
      if ((this.validationSecurity(this.contrasena1) == 0 && this.contrasena1.length >15)||(this.validationSecurity(this.contrasena1) == 1 && this.contrasena1.length <=15)){
        this.colorVar2 = '#ffa500';
        this.mensaje2 = 'Seguridad: Media';
      }else{
        if ((this.validationSecurity(this.contrasena1) == 1 && this.contrasena1.length >15)||(this.validationSecurity(this.contrasena1) == 2 && this.contrasena1.length <=10)){
          this.colorVar2 = '#008000';
          this.mensaje2 = 'Seguridad: Alta';
        }else{
          if ((this.validationSecurity(this.contrasena1) == 2 && this.contrasena1.length >10)||(this.validationSecurity(this.contrasena1) == 3)){
            this.colorVar2 = '#4b0082';
        this.mensaje2 = 'Seguridad: Muy Alta';
          }
        }
      }
    }
  }

  validationSecurity(words: string) {
    words = String(words).trim();
    const listaOpciones = {
      "lower": /^[a-z]+$/,
      "upper": /^[A-Z]+$/,
      "digit": /^[0-9]+$/,
      "special": /^[!"#$%&/()=?¡¿.,-_]+$/,
      "lowerDigit": /^[a-z0-9]+$/,
      "upperDigit": /^[A-Z0-9]+$/,
      "upperLower": /^[A-Za-z]+$/,
      "lowerspecialDigit": /^[a-z0-9!"#$%&/()=?¡¿.,-_]+$/,
      "upperspecialDigit": /^[A-Z0-9!"#$%&/()=?¡¿.,-_]+$/,
      "upperspecialLower": /^[A-Za-z!"#$%&/()=?¡¿.,-_]+$/,
      "upperDigitLower": /^[A-Za-z0-9]+$/,
      "upperspecialDigitLower": /^[A-Za-z0-9!"#$%&/()=?¡¿.,-_]+$/
    }
   
    if (listaOpciones.lower.test(words)) return 0;
    if (listaOpciones.upper.test(words)) return 0;
    if (listaOpciones.digit.test(words)) return 0;
    if (listaOpciones.special.test(words)) return 0;
    if (listaOpciones.upperLower.test(words)) return 1;
    if (listaOpciones.lowerDigit.test(words)) return 1;
    if (listaOpciones.upperDigit.test(words)) return 1;
    if (listaOpciones.upperspecialLower.test(words)) return 2;
    if (listaOpciones.lowerspecialDigit.test(words)) return 2;
    if (listaOpciones.upperspecialDigit.test(words)) return 2;
    if (listaOpciones.upperDigitLower.test(words)) return 2;
    if (listaOpciones.upperspecialDigitLower.test(words)) return 3;
    return -1;
  }

}
