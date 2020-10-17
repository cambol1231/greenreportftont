import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {RecuperacionAuditoria} from '../models/RecuperacionAuditoria';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const {server} = environment;
@Injectable({
  providedIn: 'root'
})
export class RecuperacionAuditoriaService {
api = `${server}/RecuperacionAuditoria`;
  constructor(private http: HttpClient) { }
    getRecuperacionAuditoria(): Observable<RecuperacionAuditoria>{
      return this.http.get<any>(`${this.api}`);
  }
  RecuperacionAuditoria(RecuperacionAuditoria:RecuperacionAuditoria): Observable<RecuperacionAuditoria>{
    return this.http.post<any>(`${this.api}`, RecuperacionAuditoria);
  }

}
