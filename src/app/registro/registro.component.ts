import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecuperacionService } from '../Servicios/Recuperacion.service';
import { Recuperacion } from '../models/Recuperacion';
import { StorageService } from '../Servicios/storage.service';
import { ServiceCompartidoService } from '../servicioCompartido/service-compartido.service';

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
  registros: any = undefined;
  Recuperacion: any = undefined;
  public visualizar: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: RecuperacionService,
    private storage: StorageService,
    private serCompartido: ServiceCompartidoService
  ) {
    this.mostrarNuevo = false;
    this.mostrarLista = true;
  }

  ngOnInit() {

    this.inicializar();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

    this.user = JSON.parse(localStorage.getItem('_user'));

    this.getRecuperacion()
  }


  inicializar() {

    this.RegistroForm = this.formBuilder.group({
      correo: ['', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
      idMaterialRec: ['', [Validators.required]],
      idUnidadMedida: ['', [Validators.required]],
      Cantidad: ['', [Validators.required]]
    });

  }

  getRecuperacion() {
    this.api.getRecuperacion()
      .subscribe(data => {
        console.log
        this.registros = data;
        console.log(data);
        this.registros.visualisar = false;
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
    this.serCompartido.cargando('Agregando usuario', 'Estamos guardando un usuario nuevo');
    if (this.RegistroForm.invalid) {
      for (const prop in this.RegistroForm.controls) {
        this.RegistroForm.controls[prop].markAsTouched();
        console.log('this.RegistroForm.controls[prop] :>> ', prop, this.RegistroForm.controls[prop]);
      }
      return;
    }
    const recuperacion = new Recuperacion(
      this.f.correo.value,
      this.f.idMaterialRec.value,
      this.f.idUnidadMedida.value,
      this.f.Cantidad.value)
    console.log("Registro", recuperacion)

    this.api.Recuperacion(recuperacion).subscribe(
      (correo: any) => {
        console.log(correo);
        if (correo.status === 'ok') {
          this.inicializar();
          this.serCompartido.cerrar();
          this.serCompartido.mensajeInformativo('Se Agrego con exito', 'Se agrego con exito el usuario ', 'success');
          this.mostrar('L')
        }
        else 
        this.serCompartido.mensajeInformativo('Error', 'Tienes un dato erroneo ', 'Validar');

      }, ({ error }) => {
        if (error) {
          this.hasError = true;
          this.errorMessage = error.error;
          console.log(error);
          setTimeout(() => {
            this.hasError = false;
            this.errorMessage = '';
          }, 3000);
        }
      }
    )

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
