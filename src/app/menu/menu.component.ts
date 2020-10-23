import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: any = undefined;
  constructor(private ro: Router) {
    this.user = JSON.parse(sessionStorage.getItem('usuario'));
   }

  ngOnInit(): void {
  }
  public cerrarSesion() {
    sessionStorage.clear();
    localStorage.clear();
    this.ro.navigate(['/']);
  }


}
