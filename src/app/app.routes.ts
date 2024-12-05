import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { BDComponent } from './components/departamentos/bd/bd.component';
import { ComercialComponent } from './components/departamentos/comercial/comercial.component';
import { OperacionalComponent } from './components/departamentos/operacional/operacional.component';
import { PricingComponent } from './components/departamentos/pricing/pricing.component';
import { TIComponent } from './components/departamentos/ti/ti.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { OnboradingComponent } from './components/onboarding/onboarding.component';
import { SocialComponent } from './components/social/social.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'home',  component: HomeComponent},
    {path: 'departamentos', component: DepartamentosComponent},
    {path: 'departamentos/bd', component: BDComponent},
    {path: 'departamentos/ti', component: TIComponent},
    {path: 'departamentos/pricing', component: PricingComponent},
    {path: 'departamentos/comercial', component: ComercialComponent},
    {path: 'departamentos/operacional', component: OperacionalComponent},
    {path: 'onboarding', component: OnboradingComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: 'social', component: SocialComponent},
    { path: '**', component: NotFoundComponent},
    { path: '', component: LoginComponent },

];
