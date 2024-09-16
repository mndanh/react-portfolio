import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // import path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]', // Keep original file extensions
      },
    },
  },
});
