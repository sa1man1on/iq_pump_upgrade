import React, {createContext, useContext, useEffect, useState} from 'react';
import {BrowserProvider} from 'ethers';
import {useAppKitProvider} from '@reown/appkit/react';

const WalletContext = createContext<BrowserProvider | null>(null);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const {walletProvider} = useAppKitProvider('eip155');   // сырой provider
    const [provider, setProvider] = useState<BrowserProvider | null>(null);

    useEffect(() => {
        if (walletProvider) {
            // превращаем сырой provider в удобный ethers-провайдер
            setProvider(new BrowserProvider(walletProvider as any));
        } else {
            setProvider(null);     // пользователь отключился
        }
    }, [walletProvider]);

    return (
        <WalletContext.Provider value={provider}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWalletProvider = () => useContext(WalletContext);
