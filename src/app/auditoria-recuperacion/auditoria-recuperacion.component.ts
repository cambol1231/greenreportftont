import { Component, OnInit } from '@angular/core';
import {StorageService} from '../Servicios/storage.service'

@Component({
  selector: 'app-auditoria-recuperacion',
  templateUrl: './auditoria-recuperacion.component.html',
  styleUrls: ['./auditoria-recuperacion.component.css']
})
export class AuditoriaRecuperacionComponent implements OnInit {


  constructor(
    private storage: StorageService
  ) { }

  ngOnInit() {

  }

}
