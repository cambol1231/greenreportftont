import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecuperacionService } from '../Servicios/Recuperacion.service';
import { Recuperacion } from '../models/Recuperacion';
import {StorageService} from '../Servicios/storage.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public mostrarNuevo: boolean;
  public mostrarLista: boolean;
  RegistroForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hasError: boolean;
  errorMessage: string;
  user: any = undefined;
  registro: any = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api:RecuperacionService,
    private storage: StorageService
  ) {
    this.mostrarNuevo = false;
    this.mostrarLista = true;   
  }

  ngOnInit() {

    this.RegistroForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      correo: ['', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
      Material: ['', [Validators.required, Validators.minLength(1)]],
      DescripcionUnidadMedida: ['', [Validators.required, Validators.minLength(1)]],
      Cantidad: ['', [Validators.required]]
    }); 

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

    this.user = JSON.parse(localStorage.getItem('_user'));

    this.getRecuperacion()
  }

  getRecuperacion() {
    this.api.getRecuperacion()
      .subscribe(data => {
        this.registro = data[0];
        this.registro.visualisar = false;
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
    return this.RegistroForm.controls;
  }


  Registro() {
    if (this.RegistroForm.invalid) {
      for (const prop in this.RegistroForm.controls) {
        this.RegistroForm.controls[prop].markAsTouched();
        console.log('this.RegistroForm.controls[prop] :>> ', prop, this.RegistroForm.controls[prop]);
      }
      return;
    }
    const Registro = new this.registro(
      this.f.id.value,
      this.f.correo.value,
      this.f.Material.value,
      this.f.DescripcionUnidadMedida.value,
      this.f.Cantidad.value)
    console.log("Registro", Registro)
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
