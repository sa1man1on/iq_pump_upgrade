import {createAppKit} from '@reown/appkit/react';
import {EthersAdapter} from '@reown/appkit-adapter-ethers';
import {arbitrum} from '@reown/appkit/networks';

const metadata = {
    name: 'IQPUMP',
    description: 'Крипто-игра для прокачки мозга',
    url: 'http://localhost:5173/',   // фактический домен
    icons: ['http://localhost:5173/icon.png']
};

createAppKit({
    adapters: [new EthersAdapter()],
    networks: [arbitrum],
    projectId: import.meta.env.VITE_REOWN_ID,
    metadata,
    features: {analytics: true}
});
