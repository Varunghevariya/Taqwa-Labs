import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,  // prevent source map errors
  },
  logLevel: 'error'    // hides non-critical warnings
})
