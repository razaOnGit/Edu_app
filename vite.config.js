import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,            // Allow external access via IP or Ngrok
    port: 5173,            // Ensure the same port is used
    strictPort: true,      // Prevent Vite from switching ports if 5173 is busy
    allowedHosts: [
      '.ngrok-free.app',   // Allow all Ngrok hosts
      '.vercel.app'        // Allow Vercel hosts
    ]
  },
  build: {
    chunkSizeWarningLimit: 1000,  // Suppress large chunk warnings
    outDir: 'dist',        // Output directory for production build
    sourcemap: true,       // Generate sourcemaps for debugging
    minify: 'terser',      // Use Terser for better minification
    terserOptions: {       // Configure Terser
      compress: {
        drop_console: true // Remove console.logs in production
      }
    },
    rollupOptions: {       // Configure Rollup bundler
      output: {
        manualChunks: {    // Split vendor chunks
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
});
