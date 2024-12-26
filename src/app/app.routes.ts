import { Routes } from '@angular/router';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { ArrendadoresComponent } from './pages/arrendadores/arrendadores.component';
import { ArrendatariosComponent } from './pages/arrendatarios/arrendatarios.component';
import { ContratosComponent } from './pages/contratos/contratos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PropiedadesEditComponent } from './pages/propiedades/propiedades.edit/propiedades.edit.component';

export const routes: Routes = [
    {path:'*', redirectTo: 'inicio', pathMatch: 'full'},

    {path:'propiedades', component: PropiedadesComponent},
    {path:'propiedades/edit/:id', component: PropiedadesEditComponent},


    {path:'arrendadores', component: ArrendadoresComponent},

    {path:'arrendatarios', component: ArrendatariosComponent},

    {path:'contratos', component: ContratosComponent},

    {path:'inicio', component: InicioComponent},


];
