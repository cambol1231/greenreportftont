import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Perfil} from '../models/Perfil';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const {server} = environment;
@Injectable({
  providedIn: 'root'
})
export class PerfilService {
api = `${server}/Perfil`;
constructor(private http: HttpClient) { }
getPerfil(): Observable<Perfil>{
const user = JSON.parse(sessionStorage.getItem('usuario'));
  return this.http.post<any>(`${this.api}`,user);
  }
}

