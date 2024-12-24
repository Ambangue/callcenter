export type UserRole = 'admin' | 'agent' | 'supervisor';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  twoFactorEnabled: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  role: UserRole | null;
}