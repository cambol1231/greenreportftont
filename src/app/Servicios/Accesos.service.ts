import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Accesos} from '../models/Accesos';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const {server} = environment;
@Injectable({
  providedIn: 'root'
})
export class AccesosService {
api = `${server}/Accesos`;
constructor(private http: HttpClient) { }
getAccesos(): Observable<Accesos>{
  const user = JSON.parse(sessionStorage.getItem('usuario'));
  return this.http.post<any>(`${this.api}`,user);
  }
}