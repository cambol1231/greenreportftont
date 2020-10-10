import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServiceCompartidoService {

  constructor() { }

  public cargando(titulo, mensaje) {
    Swal.fire({
      title: titulo,
      text: mensaje,
      onOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false
    });
  }
  public error() {

  }
  public mensajeInformativo(titulo, mensaje, icono) {
    Swal.fire({
      icon: icono,
      title: titulo,
      text: mensaje,
    });
  }
  public cerrar() {
    Swal.close();
  }
}
