import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import helmet from 'koa-helmet';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [helmet.contentSecurityPolicy()],
  },
})
