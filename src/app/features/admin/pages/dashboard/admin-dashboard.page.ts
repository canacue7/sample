import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-page',
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1>Admin Dashboard</h1>
      <p>
        Esta ruta está protegida con <strong>authGuard</strong> + <strong>roleGuard</strong>
        (solo role admin).
      </p>

      <div class="links">
        <a routerLink="/admin/users">Ver usuarios</a>
        <a routerLink="/home">Volver a home</a>
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

    .links {
      margin-top: 1rem;
      display: flex;
      gap: 1rem;
    }
  `,
})
export class AdminDashboardPageComponent {}

