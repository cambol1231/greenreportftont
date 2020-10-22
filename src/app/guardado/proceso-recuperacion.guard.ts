import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProcesoRecuperacionGuard implements CanActivate{
  permiso: Array<any>;
  per: any;
  constructor( private router: Router ){
  }
  canActivate(){
    this.permiso = JSON.parse(localStorage.getItem('permisos'));
    this.per = this.permiso.find(x => x.idPaginas == 8 );
    if(this.per){
      return true;
    }
    this.router.navigate(['/green/home']);
    return false;
    
  }
}
