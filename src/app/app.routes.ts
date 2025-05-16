import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import("./auth-form/auth-form.component").then(c => c.AuthFormComponent),
    data: { mode: 'login' },
  },
  {
    path: 'qrcode',
    loadComponent: () => import("./qrcode/qrcode.component").then(c => c.QrcodeComponent),
    canActivate: [authGuard],
  },
  {
    path: 'home',
    loadComponent: () => import("./main/main.component").then(c => c.MainComponent),
    canActivate: [authGuard],
  },
  {
    path: 'grupos-lista',
    loadComponent: () => import("./grupos/grupo-lista/grupo-lista.component").then(c => c.GrupoListaComponent),
    canActivate: [authGuard],
  },
  {
    path: 'grupo-consulta/:id',
    loadComponent: () => import("./grupos/grupo-consulta/grupo-consulta.component").then(c => c.GrupoConsultaComponent),
    canActivate: [authGuard]
  },
  {
    path: 'rank-grupo/:id',
    loadComponent: () => import("./grupos/grupo-rank/grupo-rank.component").then(c => c.GrupoRankComponent),
    canActivate: [authGuard]
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth' },
];
