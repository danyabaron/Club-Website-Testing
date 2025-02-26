import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Update if entry is explicitly defined
    rollupOptions: {
      input: './src/main.jsx', // Was './src/index.js'
    }
  },
  server: {
    port: 5173, // Change if needed
  }
});
