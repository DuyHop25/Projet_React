import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Projet_React/', // 👈 Thêm dòng này để đúng đường dẫn
  plugins: [react()],
});
