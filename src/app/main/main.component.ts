import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { ToastService } from '../shared/services/toast.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  standalone: true
})
export class MainComponent implements OnInit {
  ownerName: null | string = '';
  authService = inject(AuthService);
  toastService = inject(ToastService);
  navigationLinks = [
    { label: 'Ler QR Code', route: '/qrcode' },
    { label: 'Grupos', route: '/grupos-lista' },
    { label: 'Sair', route: '/auth' },
    { label: 'Usuários', route: 'usuario/usuario-lista'}
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.ownerName = this.authService.getUsername();
    this.toastService.success(`Bem-vindo, ${this.ownerName}!`);
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }
}
