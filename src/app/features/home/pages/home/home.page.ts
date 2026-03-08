import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1>Home</h1>
      <p>
        Esta ruta practica <strong>authGuard</strong>. Si no hay sesión, redirige al login con
        query param de retorno.
      </p>

      @if (authService.user(); as user) {
        <p class="session">Sesión activa: {{ user.name }} | role: {{ user.role }}</p>
      }

      <div class="links">
        <a routerLink="/admin">Ir a admin dashboard</a>
        <a routerLink="/admin/users">Ir a admin users</a>
      </div>
    </section>
  `,
  styles: `
    .card {
      max-width: 650px;
      margin: 1.5rem auto;
      padding: 1.25rem;
      border-radius: 0.75rem;
      background: #fff;
      border: 1px solid #e5e7eb;
    }

    .session {
      margin-top: 1rem;
      font-weight: 600;
    }

    .links {
      margin-top: 1rem;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
  `,
})
export class HomePageComponent {
  readonly authService = inject(AuthService);
}

