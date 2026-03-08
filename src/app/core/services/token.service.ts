import { Injectable } from '@angular/core';
import { AuthSession } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private readonly tokenKey = 'sample.auth.token';
  private readonly userKey = 'sample.auth.user';
  private readonly memory = new Map<string, string>();

  getSession(): AuthSession | null {
    const token = this.read(this.tokenKey);
    const rawUser = this.read(this.userKey);

    if (!token || !rawUser) {
      return null;
    }

    try {
      const user = JSON.parse(rawUser) as AuthSession['user'];
      return { token, user };
    } catch {
      this.clearSession();
      return null;
    }
  }

  setSession(session: AuthSession): void {
    this.write(this.tokenKey, session.token);
    this.write(this.userKey, JSON.stringify(session.user));
  }

  clearSession(): void {
    this.remove(this.tokenKey);
    this.remove(this.userKey);
  }

  private storage(): Storage | null {
    return typeof globalThis !== 'undefined' && 'localStorage' in globalThis
      ? globalThis.localStorage
      : null;
  }

  private read(key: string): string | null {
    const storage = this.storage();
    return storage ? storage.getItem(key) : this.memory.get(key) ?? null;
  }

  private write(key: string, value: string): void {
    const storage = this.storage();

    if (storage) {
      storage.setItem(key, value);
      return;
    }

    this.memory.set(key, value);
  }

  private remove(key: string): void {
    const storage = this.storage();

    if (storage) {
      storage.removeItem(key);
      return;
    }

    this.memory.delete(key);
  }
}

