import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-users-page',
  template: `
    <section class="card">
      <h1>Admin Users</h1>
      <p>Lista mock para practicar vistas privadas del área admin.</p>

      <ul>
        <li>Admin Demo (admin@demo.com) - admin</li>
        <li>User Demo (user@demo.com) - user</li>
      </ul>
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
  `,
})
export class AdminUsersPageComponent {}

