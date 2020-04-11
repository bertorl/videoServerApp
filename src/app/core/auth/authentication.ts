import { Injectable } from '@angular/core';
import {
  CanActivate, Router
} from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

/**
 * Guarda para determinar si estas autenticado y redireccionar en el Router
 */
@Injectable()
export class Authentication implements CanActivate {

  /**
   * Constructor de la clase
   * @param router Proporciona las capacidades de navegación y manipulación de url.
   * @param authService Servicio de autenticación de la aplicación
   */
  constructor(private router: Router, private authService: AuthService) { }

  /**
   * Metodo que determina si se enruta a la sección de home o a login
   * @param activatedRoute Contiene la información sobre una ruta asociada con un componente cargado en un
   * @param state Representa el estado del enrutador en un momento en el tiempo.
   */
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
