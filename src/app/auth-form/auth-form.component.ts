import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Root } from '../shared/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastComponent],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.sass',
})
export class AuthFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  mode: 'login' | 'signup' = 'login';
  errorMessage = '';
  rootExists = false;
  showToast = false;

  authForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.authService.removeToken();
    }

    this.authService.checkRootExists().subscribe({
      next: response => {
        this.rootExists = response;
        this.mode = response ? 'login' : 'signup';
        this.updateFormValidators();

        this.router.navigate(['/auth'], {
          queryParams: { mode: this.mode },
          replaceUrl: true
        });
      },
      error: (err: HttpErrorResponse) => {
        if (!err.status || err.status === 0) {
          this.errorMessage = "Sistema Offline";
          this.showToast = true;
        }
        console.log(err);
      }
    });
  }

  private updateFormValidators() {
    const nameControl = this.authForm.get('name');
    if (this.mode === 'signup') {
      nameControl?.addValidators(Validators.required);
    } else {
      nameControl?.clearValidators();
    }
    nameControl?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.authForm.invalid) return;
    const formData: Root = {
      username: this.authForm.controls.name.value ?? '',
      password: this.authForm.controls.password.value ?? '',
    };

    this.authForm.reset();

    const authAction = this.mode === 'login'
      ? this.authService.login(formData)
      : this.authService.signup(formData);

      authAction.subscribe({
        next: (response) => {
          this.authService.setToken(response.token);
          this.router.navigateByUrl('/home');
        },
        error: (err) => {
          this.errorMessage = this.mode === 'login'
            ? 'Login falhou. Usuário ou senha incorretos'
            : 'Falha no registro. Tente novamente';
          this.showToast = true;
          console.error('Auth error:', err);
        },
      });
  }
}
