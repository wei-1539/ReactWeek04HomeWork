import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    // 編譯路徑 開發dev 產品build
    base: process.env.NODE_ENV === 'production' ? "/ReactWeek04HomeWork/" : "/",
  plugins: [react()],
})
