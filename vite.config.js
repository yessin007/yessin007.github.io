import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    middleware: (defaultMiddleware) => {
      const middleware = [...defaultMiddleware];
      middleware.push((req, res, next) => {
        res.setHeader('X-Content-Type-Options', 'nosniff');
        next();
      });
      return middleware;
    },
  },
});