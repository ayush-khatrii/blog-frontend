import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: Boolean(localStorage.getItem("auth-token")),

  login: () => set({ isAuthenticated: true }),
  logout: () => {
    localStorage.removeItem("auth-token");
    set({ isAuthenticated: false });
  }
}));
