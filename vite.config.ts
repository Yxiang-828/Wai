import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'e891-2400-d801-5cff-7700-79c8-e596-6dd4-44f7.ngrok-free.app'
    ]
  }
})
