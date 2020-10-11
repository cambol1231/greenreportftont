import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Recuperacion} from '../models/Recuperacion';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const {server} = environment;
@Injectable({
  providedIn: 'root'
})
export class RecuperacionService {
api = `${server}/Recuperacion`;
  constructor(private http: HttpClient) { }
    getRecuperacion(): Observable<Recuperacion>{
      return this.http.get<any>(`${this.api}`);
  }

}
