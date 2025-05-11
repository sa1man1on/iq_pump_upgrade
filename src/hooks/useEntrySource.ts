// hooks/useEntrySource.ts
import {useEffect, useState} from 'react';

type Source = 'telegram' | 'web';

export function useEntrySource(): Source {
    const [src, setSrc] = useState<Source>('web');

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const isTgObj = (window as any).Telegram?.WebApp !== undefined;
        const hasTgQuery = new URLSearchParams(window.location.search).has('tgWebAppData');

        if (isTgObj || hasTgQuery) setSrc('telegram');
    }, []);

    return src;
}
