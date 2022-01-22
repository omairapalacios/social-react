import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://omairapalacios.github.io/social-react/',
  plugins: [react()]
})
