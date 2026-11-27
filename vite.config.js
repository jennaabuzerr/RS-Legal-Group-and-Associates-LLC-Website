import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssgOptions: {
    // Emit /about/index.html etc. so Vercel serves clean URLs without rewrites.
    dirStyle: 'nested',
    formatting: 'none',
  },
})
