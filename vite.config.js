import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  envDir: 'env/',
  envPrefix: 'APP_',
  server: {
    port: 3000
  }
})
