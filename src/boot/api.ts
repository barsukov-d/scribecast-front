// src/boot/api.ts
import { boot } from 'quasar/wrappers';
import axios from 'axios';

const $api = axios.create({
  baseURL: 'http://localhost:9000/api', // Замените на ваш API URL
  withCredentials: true, // Для отправки куки с запросами
});

export default boot(({ app }) => {
  app.config.globalProperties.$api = $api;
});

export { $api };
