// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const isProduction = process.env.NODE_ENV === 'production'; // Check the environment

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: isProduction ? '/Text-Translator/' : '/', // Conditional base path
});