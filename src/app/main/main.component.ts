import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  standalone: true
})
export class MainComponent implements OnInit {
  ownerName: null | string = '';
  authService = inject(AuthService);
  navigationLinks = [
    { label: 'Ler QR Code', route: '/qrcode' },
    { label: 'Sair', route: '/auth' },
    { label: 'Grupos', route: '/grupos-lista' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.ownerName = this.authService.getUsername();
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }
}
