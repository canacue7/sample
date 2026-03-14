export type Role = 'admin' | 'user';

export interface User {
  username: string;
  password: string;
  role: Role;
}

export interface SessionUser {
  username: string;
  role: Role;
}

export interface AuthSession {
  token: string;
  user: User;
}