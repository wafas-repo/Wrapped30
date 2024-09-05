import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/refresh_token': {
        target: 'http://localhost:888',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/refresh_token/, '/refresh_token')
      }
    }
  }
})
