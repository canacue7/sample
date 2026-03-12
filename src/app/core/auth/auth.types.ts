export type Role = 'admin' | 'user';

export interface AppUser {
  username: string;
  password: string;
  role: Role;
}

export interface SessionUser {
  username: string;
  role: Role;
}