import '../src/appkit/appkit.ts';

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '../src/locales/i18n.ts'
import {WalletProvider} from "./contexts/wallet-context.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <WalletProvider>
            <App/>
        </WalletProvider>
    </StrictMode>,
)
