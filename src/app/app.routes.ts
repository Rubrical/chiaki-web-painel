import { Routes } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { authGuard } from './guards/auth.guard';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthFormComponent,
    data: { mode: 'login' },
  },
  {
    path: 'qrcode',
    component: QrcodeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'home',
    component: MainComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth' },
];
