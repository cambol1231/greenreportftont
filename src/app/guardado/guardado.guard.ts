import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardadoGuard implements CanActivate {

  constructor(private ro: Router) {

  }

  canActivate() {
    if (sessionStorage.getItem('usuario')) {
      return true;
    }
    this.ro.navigate['/'];
    return false;
  }

}
