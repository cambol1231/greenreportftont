import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecuperacionAuditoriaService } from '../Servicios/RecuperacionAuditoria.service';
import { Recuperacion } from '../models/Recuperacion';
import {StorageService} from '../Servicios/storage.service'

@Component({
  selector: 'app-registro-auditoria',
  templateUrl: './registro-auditoria.component.html',
  styleUrls: ['./registro-auditoria.component.css']
})
export class RegistroAuditoriaComponent implements OnInit {

  public mostrarNuevo: boolean;
  public mostrarLista: boolean;
  RegistroAuditoriaForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hasError: boolean;
  errorMessage: string;
  user: any = undefined;
  registroAuditoria: any = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api:RecuperacionAuditoriaService,
    private storage: StorageService
  ) {
    this.mostrarNuevo = false;
    this.mostrarLista = true;   
   }

  ngOnInit() {

    this.RegistroAuditoriaForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      correo: ['', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
      Material: ['', [Validators.required, Validators.minLength(1)]],
      UnidadDeMedida: ['', [Validators.required, Validators.minLength(1)]],
      Cantidad: ['', [Validators.required]]
    }); 

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

    this.user = JSON.parse(localStorage.getItem('_user'));

    this.getRecuperacionAuditoria()

  }

  getRecuperacionAuditoria() {
    this.api.getRecuperacionAuditoria()
      .subscribe(data => {
        this.registroAuditoria = data[0];
        this.registroAuditoria.visualisar = false;
      })
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

  get f() {
    return this.RegistroAuditoriaForm.controls;
  }


  RegistroAuditoria() {
    if (this.RegistroAuditoriaForm.invalid) {
      for (const prop in this.RegistroAuditoriaForm.controls) {
        this.RegistroAuditoriaForm.controls[prop].markAsTouched();
        console.log('this.RegistroAuditoriaForm.controls[prop] :>> ', prop, this.RegistroAuditoriaForm.controls[prop]);
      }
      return;
    }
  }

  public mostrarDatos(registro: any) {
    if (registro.visualizar) {
      registro.visualizar = false;
      return false;
    } else {
      registro.visualizar = true;
      return true;
    }

  }


}
