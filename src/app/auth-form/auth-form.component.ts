import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, Root } from '../services/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.sass'
})
export class AuthFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  mode: 'login' | 'signup' = 'login';
  errorMessage = '';
  rootExists = false;

  authForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  ngOnInit() {
    this.authService.checkRootExists().subscribe(exists => {
      console.log(exists);
      this.rootExists = exists;
      this.mode = exists ? 'login' : 'signup';
      this.updateFormValidators();

      this.router.navigate(['/auth'], {
        queryParams: { mode: this.mode },
        replaceUrl: true
      });
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
    }
    const authAction = this.mode === 'login'
      ? this.authService.login(formData)
      : this.authService.signup(formData);

      authAction.subscribe({
        next: (response) => {
          console.log(response);
          localStorage.setItem('token', response.token);

          this.router.navigateByUrl('/home');
        },
        error: (err) => {
          this.errorMessage = this.mode === 'login'
            ? 'Login falhou. Usuário ou senha incorretos'
            : 'Falha no registro. Tente novamente';
          console.error('Auth error:', err);
        },
      });
  }

}
