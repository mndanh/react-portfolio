import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // import path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  base: './',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'), // Add this alias
    },
  },
});
