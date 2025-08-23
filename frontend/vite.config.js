import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"
dotenv.config();


// https://vite.dev/config/
//  '/api': "http://localhost:8080",
export default defineConfig({
  server: {
    proxy: {
      '/api': process.env.backendUrl,
    },
  },
  plugins: [react()],
})
