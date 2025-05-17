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
  {
    path: 'grupo-usuario-lista/:id',
    loadComponent: () => import("./grupos/grupo-usuario-lista/grupo-usuario-lista.component").then(c => c.GrupoUsuarioListaComponent),
    canActivate: [authGuard],
  },
  {
    path: 'usuario/usuario-consulta/:id',
    loadComponent: () => import("./usuarios/usuario-consulta/usuario-consulta.component").then(c => c.UsuarioConsultaComponent),
    canActivate: [authGuard]
  },
  {
    path: 'usuario/usuario-lista',
    loadComponent: () => import("./usuarios/usuario-lista/usuario-lista.component").then(c => c.UsuarioListaComponent),
    canActivate: [authGuard],
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth' },
];
