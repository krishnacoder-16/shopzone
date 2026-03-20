import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Force Vite rebuild to apply tailwind's darkMode: 'class' update
export default defineConfig({
  plugins: [react()],
})
