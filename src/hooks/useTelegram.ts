// src/hooks/useTelegram.ts
import {useEffect, useState} from 'react';
import type {TelegramWebApp} from 'telegram-web-app';

export function useTelegram() {
    const [tg, setTg] = useState<TelegramWebApp | null>(null);

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const webApp = window.Telegram.WebApp;
            webApp.ready();            // убирает сплэш и сообщает «страница готова»
            setTg(webApp);
        }
    }, []);

    return tg;
}
