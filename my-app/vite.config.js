import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,            // Allow external access via IP or Ngrok
    port: 5173,            // Ensure the same port is used
    strictPort: true,      // Prevent Vite from switching ports if 5173 is busy
    allowedHosts: [
      '.ngrok-free.app'    // Allow all Ngrok hosts
    ]
  },
  build: {
    chunkSizeWarningLimit: 1000  // Suppress large chunk warnings
  }
});
