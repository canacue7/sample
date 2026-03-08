export type Role = 'admin' | 'user';

export interface User {
  id: number;
  email: string;
  name: string;
  role: Role;
}

export interface AuthSession {
  token: string;
  user: User;
}

