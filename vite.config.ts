import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        allowedHosts: ['a484-62-4-39-197.ngrok-free.app'],
    },
})
