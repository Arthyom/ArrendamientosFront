import { Routes } from '@angular/router';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { ArrendadoresComponent } from './pages/arrendadores/arrendadores.component';
import { ArrendatariosComponent } from './pages/arrendatarios/arrendatarios.component';
import { ContratosComponent } from './pages/contratos/contratos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    {path:'*', redirectTo: 'inicio', pathMatch: 'full'},
    {path:'propiedades', component: PropiedadesComponent},
    {path:'arrendadores', component: ArrendadoresComponent},
    {path:'arrendatarios', component: ArrendatariosComponent},
    {path:'contratos', component: ContratosComponent},
    {path:'inicio', component: InicioComponent},


];
