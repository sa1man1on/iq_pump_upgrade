// SafeTelegramParams.tsx
import {useLaunchParams} from '@telegram-apps/sdk-react';

export const SafeTelegramParams = () => {
    try {
        return useLaunchParams({throwOnMissing: false});
    } catch (e) {
        return undefined;
    }
};
