import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();
  const isTokenValid = authService.isTokenValid();

  if ((!token || !isTokenValid) && router.url !== '/login') {
    router.navigate(['/login']);
  }

  return next(req);
};
