// src/services/authService.ts
import { $api } from 'boot/api';

interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  // Добавьте другие поля пользователя по необходимости
}

/**
 * Выполняет вход пользователя.
 * @param credentials Объект с email и password.
 * @returns Промис, который резолвится при успешном входе.
 */
export const login = async (credentials: LoginCredentials): Promise<void> => {
  await $api.post('/login', credentials, { withCredentials: true });
};

/**
 * Выполняет выход пользователя.
 * @returns Промис, который резолвится при успешном выходе.
 */
export const logout = async (): Promise<void> => {
  await $api.post('/logout', {}, { withCredentials: true });
};

/**
 * Проверяет статус аутентификации пользователя.
 * @returns Промис, который резолвится с информацией о пользователе при успешной аутентификации.
 */
export const getCurrentUser = async (): Promise<User> => {
  const response = await $api.get<User>('/me', { withCredentials: true });
  return response.data;
};
