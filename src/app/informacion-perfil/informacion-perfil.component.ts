import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../Servicios/Perfil.service';
import {StorageService} from '../Servicios/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Perfil } from '../models/Perfil';

@Component({
  selector: 'app-informacion-perfil',
  templateUrl: './informacion-perfil.component.html',
  styleUrls: ['./informacion-perfil.component.css']
})
export class InformacionPerfilComponent implements OnInit {


  public mostrarNuevo: boolean;
  public mostrarLista: boolean;
  returnUrl: string;
  user: any = undefined;
  public perfil: Perfil;
  public nombre: string;
  constructor(
    private api:PerfilService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService
  ) {
    this.mostrarNuevo = false;
    this.mostrarLista = true;
    this.perfil = new Perfil('','','');
    this.nombre='yghhghg';
    this.getPerfil();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  getPerfil() {
    this.api.getPerfil()
    .subscribe(data => {
      
      this.perfil = data[0];
      this.nombre = this.perfil.Nombre;
      console.log(this.perfil);
      console.log(this.nombre);
    });
    
  }

  mostrar(seleccionado: any) {
    if (seleccionado === 'N') {
      this.mostrarNuevo = true;
      this.mostrarLista = false;
    } else {
      if (seleccionado === 'L') {
        this.mostrarNuevo = false;
        this.mostrarLista = true;
      }
    }
  }

}
