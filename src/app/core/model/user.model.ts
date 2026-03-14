export interface User {
  id: number;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}