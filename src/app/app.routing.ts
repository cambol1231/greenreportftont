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


const routes: Routes = [
    {
        path: 'green',
        component: MenuComponent,
        children: [
            { path: 'home', component: HomeComponent, canActivate: [GuardadoGuard] },
            { path: 'inicio', component: InicioComponent, canActivate: [GuardadoGuard] },
            { path: 'personal', component: PersonalComponent, canActivate: [GuardadoGuard] },
            { path: 'InformacionPerfil', component: InformacionPerfilComponent, canActivate: [GuardadoGuard] },
            { path: 'Registro', component: RegistroComponent, canActivate: [GuardadoGuard] },
            { path: 'RegistroAuditoria', component: RegistroAuditoriaComponent, canActivate: [GuardadoGuard] },
            { path: 'Materiales', component: MaterialesComponent, canActivate: [GuardadoGuard] },
            { path: 'ProcesoRecuperacion', component: ProcesoRecuperacionComponent, canActivate: [GuardadoGuard] },
            { path: 'AuditoriaRecuperacion', component: AuditoriaRecuperacionComponent, canActivate: [GuardadoGuard] },

        ]
    },
    { path: '', component: LoginComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);