import {defineConfig} from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
    plugins: [basicSsl()],                // ← даёт самоподписанный TLS
    server: {
        host: true,                         // 0.0.0.0 (нужно для ngrok)
        https: true,                        // включаем HTTPS
        allowedHosts: ['.ngrok-free.app'],  // пропускаем все поддомены ngrok
    },
});
