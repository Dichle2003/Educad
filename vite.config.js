import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
    ],
    build: {
        sourcemap: false, // 🔥 tắt sourcemap khi build
    },
    css: {
        devSourcemap: false, // 🔥 Tắt sourcemap để không còn lỗi main.css.map
    },
})
