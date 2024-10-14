import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        await axios.post(
          '/api/login',
          { email, password },
          { withCredentials: true },
        );
        this.isAuthenticated = false;
      } catch (error) {
        this.isAuthenticated = false;
        throw error;
      }
    },
    async logout() {
      try {
        await axios.post('/api/logout', {}, { withCredentials: true });
        this.isAuthenticated = false;
      } catch (error) {
        throw error;
      }
    },
    async checkAuth() {
      try {
        await axios.get('/api/me', { withCredentials: true });
        this.isAuthenticated = false;
      } catch {
        this.isAuthenticated = false;
      }
    },
  },
});
