import {createAppKit} from '@reown/appkit/react';
import {EthersAdapter} from '@reown/appkit-adapter-ethers';
import {arbitrum} from '@reown/appkit/networks';

const actual_url = 'https://a9e2-62-4-58-200.ngrok-free.app'

const metadata = {
    name: 'IQPUMP',
    description: 'Крипто-игра для прокачки мозга',
    url: actual_url,  // https://localhost:5173 // фактический домен
    icons: [`${actual_url}/icon.png`]
};

createAppKit({
    adapters: [new EthersAdapter()],
    networks: [arbitrum],
    projectId: import.meta.env.VITE_REOWN_ID,
    metadata,
    features: {analytics: true}
});
