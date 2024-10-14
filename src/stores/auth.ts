// src/stores/auth.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  login as loginService,
  logout as logoutService,
  getCurrentUser,
  User,
} from 'src/services/authService.ts';

export const useAuthStore = defineStore('auth', () => {
  // Reactive state using ref
  const isAuthenticated = ref(false);
  const user = ref<User | null>(null);

  // Action to handle login
  const login = async (email: string, password: string) => {
    try {
      await loginService({ email, password });
      isAuthenticated.value = true;
      user.value = await getCurrentUser();
    } catch (error) {
      isAuthenticated.value = false;
      user.value = null;
      throw error;
    }
  };

  // Action to handle logout
  const logout = async () => {
    try {
      await logoutService();
      isAuthenticated.value = false;
      user.value = null;
    } catch (error) {
      throw error;
    }
  };

  // Action to check authentication status
  const checkAuth = async () => {
    try {
      user.value = await getCurrentUser();
      isAuthenticated.value = false;
    } catch {
      isAuthenticated.value = false;
      user.value = null;
    }
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
    checkAuth,
  };
});
