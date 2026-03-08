import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <section class="card">
      <h1>Login</h1>
      <p class="hint">Usa estas cuentas demo para practicar roles y guards:</p>
      <ul>
        <li><strong>admin@demo.com</strong> / 123456</li>
        <li><strong>user@demo.com</strong> / 123456</li>
      </ul>

      <form (ngSubmit)="submit()" #form="ngForm">
        <label>
          Email
          <input name="email" type="email" [(ngModel)]="email" required />
        </label>

        <label>
          Password
          <input name="password" type="password" [(ngModel)]="password" required />
        </label>

        @if (errorMessage) {
          <p class="error">{{ errorMessage }}</p>
        }

        <div class="actions">
          <button type="submit" [disabled]="form.invalid">Login</button>
          <button type="button" class="secondary" (click)="fillAdmin()">Admin demo</button>
          <button type="button" class="secondary" (click)="fillUser()">User demo</button>
        </div>
      </form>

      <a routerLink="/home">Volver a home</a>
    </section>
  `,
  styles: `
    .card {
      max-width: 480px;
      margin: 1.5rem auto;
      padding: 1.25rem;
      border-radius: 0.75rem;
      background: #fff;
      border: 1px solid #e5e7eb;
    }

    form,
    label {
      display: block;
    }

    label {
      margin-top: 0.85rem;
      font-size: 0.95rem;
      font-weight: 600;
    }

    input {
      width: 100%;
      margin-top: 0.4rem;
      padding: 0.6rem;
      border-radius: 0.5rem;
      border: 1px solid #d1d5db;
      box-sizing: border-box;
    }

    .hint {
      margin-bottom: 0.35rem;
    }

    ul {
      margin-top: 0;
      padding-left: 1.3rem;
      color: #374151;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .secondary {
      background: #fff;
      color: #111827;
    }

    .error {
      color: #b91c1c;
      margin-top: 0.6rem;
    }
  `,
})
export class LoginPageComponent {
  email = '';
  password = '';
  errorMessage = '';

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  submit(): void {
    const isValid = this.authService.login({ email: this.email, password: this.password });

    if (!isValid) {
      this.errorMessage = 'Credenciales incorrectas';
      return;
    }

    const redirectTarget = this.route.snapshot.queryParamMap.get('redirect') ?? '/home';
    void this.router.navigateByUrl(redirectTarget);
  }

  fillAdmin(): void {
    this.email = 'admin@demo.com';
    this.password = '123456';
    this.errorMessage = '';
  }

  fillUser(): void {
    this.email = 'user@demo.com';
    this.password = '123456';
    this.errorMessage = '';
  }
}

