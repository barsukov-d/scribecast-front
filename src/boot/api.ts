// src/boot/api.ts
import { boot } from 'quasar/wrappers';
import axios from 'axios';

const $api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // Для отправки куки с запросами
});

export default boot(({ app }) => {
  app.config.globalProperties.$api = $api;
});

export { $api };
