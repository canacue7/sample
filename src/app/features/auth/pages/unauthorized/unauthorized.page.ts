import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unauthorized-page',
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1>Unauthorized</h1>
      <p>No tienes permisos para esta ruta.</p>
      <div class="actions">
        <a routerLink="/home">Ir a home</a>
        <a routerLink="/login">Ir a login</a>
      </div>
    </section>
  `,
  styles: `
    .card {
      max-width: 520px;
      margin: 1.5rem auto;
      padding: 1.25rem;
      border-radius: 0.75rem;
      background: #fff;
      border: 1px solid #e5e7eb;
    }

    .actions {
      margin-top: 1rem;
      display: flex;
      gap: 1rem;
    }
  `,
})
export class UnauthorizedPageComponent {}

