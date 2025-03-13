import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs'
  },
  assetsInclude: ['**/*.JPG'],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['5e85-68-205-76-76.ngrok-free.app'], // Allow this host
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    cors: true
  }
});

