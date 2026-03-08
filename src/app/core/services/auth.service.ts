import { computed, inject, Injectable, signal } from '@angular/core';
import { AuthSession, Role, User } from '../models/user.model';
import { TokenService } from './token.service';

interface LoginPayload {
  email: string;
  password: string;
}

const DEMO_USERS: Array<User & { password: string }> = [
  {
    id: 1,
    name: 'Admin Demo',
    email: 'admin@demo.com',
    password: '123456',
    role: 'admin',
  },
  {
    id: 2,
    name: 'User Demo',
    email: 'user@demo.com',
    password: '123456',
    role: 'user',
  },
];

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenService = inject(TokenService);
  private readonly session = signal<AuthSession | null>(this.tokenService.getSession());
  readonly user = computed(() => this.session()?.user ?? null);
  readonly token = computed(() => this.session()?.token ?? null);

  login(payload: LoginPayload): boolean {
    const matchedUser = DEMO_USERS.find(
      (user) => user.email === payload.email.trim().toLowerCase() && user.password === payload.password,
    );

    if (!matchedUser) {
      return false;
    }

    const { password: _, ...safeUser } = matchedUser;
    const nextSession: AuthSession = {
      token: `fake-jwt-token-${safeUser.role}-${safeUser.id}`,
      user: safeUser,
    };

    this.session.set(nextSession);
    this.tokenService.setSession(nextSession);
    return true;
  }

  logout(): void {
    this.session.set(null);
    this.tokenService.clearSession();
  }

  isAuthenticated(): boolean {
    return this.session() !== null;
  }

  hasRole(allowedRoles: Role[]): boolean {
    const currentUser = this.user();
    return !!currentUser && allowedRoles.includes(currentUser.role);
  }
}
