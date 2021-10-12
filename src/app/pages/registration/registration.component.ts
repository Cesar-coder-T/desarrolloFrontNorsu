import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppComponent } from 'src/app/app.component';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
/**
 * Class of Registration component
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

  hide = true;
  /**
   * Constructor of class "registrationComponent"
   * @param apiRegistro consulta el post para el registro
   * @param router redirecciona al usuario
   * @param snackBar muestra error capturado
   * @param estado muestra el estado de carga del componente
   * @param consultaService carga el proceso de consulta
   */
  constructor(
    private router: Router,
    private estado: AppComponent
  ) {
    
    };
  
  /**
     * Método que se ejecuta inmediatamente después
     * del constructor y que activa todo su contenido al
     * cargar el componente.
     * Nota: En este método se cargan las validaciones del
     * formulario de registro
     */
  ngOnInit(): void {
    this.validador = 0;
    this.registrationForm = new FormGroup({
      completeName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      /**apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      correo: new FormControl('', [Validators.required, Validators.email, Validators.minLength(10)]),
      rol_id: new FormControl(4),
      fecha_nacimiento: new FormControl('', Validators.required),
      identificacion: new FormControl('', [Validators.required, Validators.min(1000),]),
      clave: new FormControl('', [Validators.required, Validators.minLength(6)]),
      estado_id: new FormControl(1),*/
    });
  }
  /**
   * Método encargado de obtener los valores ingresados por el usuario
   * al formulario y cargarlos en el objeto usuario, para consumir 
   * el servicio que guarda al usuario en base de datos.
   */
  onRegistro() {
    if (this.contrasena1 == this.contrasena2) {
      console.log("Correcto");
    }
    else {
      delay(1000);
      console.log("Error");
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