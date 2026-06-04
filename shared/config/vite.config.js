import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

/**
 * Shared Vite config for all sub-projects.
 * Each project should copy or import this pattern and adjust __dirname as needed.
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '..'),
    },
    dedupe: ['react', 'react-dom'],
  },
})
