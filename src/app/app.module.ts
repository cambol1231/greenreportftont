import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { InicioComponent } from './inicio/inicio.component';
import { PersonalComponent } from './personal/personal.component';
import { InformacionPerfilComponent } from './informacion-perfil/informacion-perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroAuditoriaComponent } from './registro-auditoria/registro-auditoria.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { ProcesoRecuperacionComponent } from './proceso-recuperacion/proceso-recuperacion.component';
import { AuditoriaRecuperacionComponent } from './auditoria-recuperacion/auditoria-recuperacion.component';
import { MenuComponent } from './menu/menu.component';
//Graficos
import { ChartsModule } from 'ng2-charts';
//Perfil
import { PersonalGuard } from './guardado/personal.guard';
import { AuditoriaRecuperacionGuard } from './guardado/auditoria-recuperacion.guard';
import { InformacionPerfilGuard } from './guardado/informacion-perfil.guard';
import { MaterialesGuard } from './guardado/materiales.guard';
import { ProcesoRecuperacionGuard } from './guardado/proceso-recuperacion.guard';
import { RegistroGuard } from './guardado/registro.guard';
import { RegistroAuditoriaGuard } from './guardado/registro-auditoria.guard';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        ChartsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        InicioComponent,
        PersonalComponent,
        InformacionPerfilComponent,
        RegistroComponent,
        RegistroAuditoriaComponent,
        MaterialesComponent,
        ProcesoRecuperacionComponent,
        AuditoriaRecuperacionComponent,
        MenuComponent
    ],
    providers: [
        PersonalGuard,
        AuditoriaRecuperacionGuard,
        InformacionPerfilGuard,
        MaterialesGuard,
        ProcesoRecuperacionGuard,
        RegistroGuard,
        RegistroAuditoriaGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };