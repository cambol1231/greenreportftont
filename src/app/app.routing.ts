import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { InicioComponent } from './inicio/inicio.component';
import { PersonalComponent } from './personal/personal.component';
import { InformacionPerfilComponent } from './informacion-perfil/informacion-perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroAuditoriaComponent } from './registro-auditoria/registro-auditoria.component'
import { MaterialesComponent } from './materiales/materiales.component'
import { ProcesoRecuperacionComponent } from './proceso-recuperacion/proceso-recuperacion.component'
import { AuditoriaRecuperacionComponent } from './auditoria-recuperacion/auditoria-recuperacion.component';
import { MenuComponent } from './menu/menu.component';
import { GuardadoGuard } from './guardado/guardado.guard';
import { PersonalGuard } from './guardado/personal.guard';
import { AuditoriaRecuperacionGuard } from './guardado/auditoria-recuperacion.guard';
import { InformacionPerfilGuard } from './guardado/informacion-perfil.guard';
import { MaterialesGuard } from './guardado/materiales.guard';
import { ProcesoRecuperacionGuard } from './guardado/proceso-recuperacion.guard';
import { RegistroAuditoriaGuard } from './guardado/registro-auditoria.guard';
import { RegistroGuard } from './guardado/registro.guard';



const routes: Routes = [
    {
        path: 'green',
        component: MenuComponent,
        children: [
            { path: 'home', component: HomeComponent, canActivate: [GuardadoGuard] },
            { path: 'inicio', component: InicioComponent, canActivate: [GuardadoGuard] },
            { path: 'personal', component: PersonalComponent, canActivate: [GuardadoGuard, PersonalGuard] },
            { path: 'InformacionPerfil', component: InformacionPerfilComponent, canActivate: [GuardadoGuard, InformacionPerfilGuard] },
            { path: 'Registro', component: RegistroComponent, canActivate: [GuardadoGuard, RegistroGuard] },
            { path: 'RegistroAuditoria', component: RegistroAuditoriaComponent, canActivate: [GuardadoGuard, RegistroAuditoriaGuard] },
            { path: 'Materiales', component: MaterialesComponent, canActivate: [GuardadoGuard, MaterialesGuard] },
            { path: 'ProcesoRecuperacion', component: ProcesoRecuperacionComponent, canActivate: [GuardadoGuard, ProcesoRecuperacionGuard] },
            { path: 'AuditoriaRecuperacion', component: AuditoriaRecuperacionComponent, canActivate: [GuardadoGuard,AuditoriaRecuperacionGuard] },

        ]
    },
    { path: '', component: LoginComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);