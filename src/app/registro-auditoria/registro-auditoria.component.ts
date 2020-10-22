import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecuperacionAuditoriaService } from '../Servicios/RecuperacionAuditoria.service';
import { RecuperacionAuditoria } from '../models/RecuperacionAuditoria';
import {StorageService} from '../Servicios/storage.service'
import { ServiceCompartidoService } from '../servicioCompartido/service-compartido.service';

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
  registroAuditoria: any = undefined;
  

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api:RecuperacionAuditoriaService,
    private storage: StorageService,
    private serCompartido: ServiceCompartidoService
  ) {
    this.mostrarNuevo = false;
    this.mostrarLista = true;   
   }

  ngOnInit() {

    this.inicializar();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    this.getRecuperacionAuditoria()

  }

  inicializar(){
    this.RegistroAuditoriaForm = this.formBuilder.group({
      idPorc_Recupera: ['', [Validators.required]],
      correo: ['', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
      idMaterial: ['', [Validators.required]],
      CantidadMaterial: ['', [Validators.required]],
      idUnidadMedida: ['', [Validators.required]]
    }); 
  }

  getRecuperacionAuditoria() {
    this.api.getRecuperacionAuditoria()
      .subscribe(data => {
        this.registroAuditoria = data;
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
    this.serCompartido.cargando('Agregando usuario', 'Estamos guardando un usuario nuevo');
    if (this.RegistroAuditoriaForm.invalid) {
      for (const prop in this.RegistroAuditoriaForm.controls) {
        this.RegistroAuditoriaForm.controls[prop].markAsTouched();
        console.log('this.RegistroAuditoriaForm.controls[prop] :>> ', prop, this.RegistroAuditoriaForm.controls[prop]);
      }
      return;
    }

    const recuperacionAuditoria = new RecuperacionAuditoria (
      this.f.idPorc_Recupera.value,
      this.f.correo.value,
      this.f.idMaterial.value,
      this.f.CantidadMaterial.value,
      this.f.idUnidadMedida.value)
    console.log("RegistroAuditoria", recuperacionAuditoria)

    this.api.RecuperacionAuditoria(recuperacionAuditoria).subscribe(
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
      }
         , ({ error }) => {
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

  public mostrarDatos(registroAuditoria: any) {
    if (registroAuditoria.visualizar) {
      registroAuditoria.visualizar = false;
      return false;
    } else {
      registroAuditoria.visualizar = true;
      return true;
    }

  }

  

}
