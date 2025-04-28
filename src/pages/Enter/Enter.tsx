import cls from './Enter.module.scss';

import {useNavigate} from "react-router-dom";
import {useWalletProvider} from "../../contexts/wallet-context.tsx";
import {useAppKit} from "@reown/appkit/react";
import {useState} from "react";
import Button from "../../components/buttons/Button/Button.tsx";
import Logo from "../../components/Logo/Logo.tsx";
import Layout from "../../layouts/Layout/Layout.tsx";

export default function Enter() {
    const navigate = useNavigate();


    const {open} = useAppKit();
    const provider = useWalletProvider();
    const [address, setAddress] = useState<string>();

    const handleConnect = async () => {
        await open();

        if (!provider) return;

        const signer = await provider.getSigner();

        const addr = await signer.getAddress();

        if (addr) {
            setAddress(addr);
            console.log('Игрок авторизован как', addr);
        }

    };

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>

                <Layout/>

                <div className={cls.logoWrapper}>
                    <Logo></Logo>
                </div>

                <div className={cls.buttonWrapper}>
                    <Button onClick={handleConnect}>
                        {address
                            ? `Authorized ERC20`
                            : 'Connect ERC20'}</Button>
                </div>

                <Button onClick={() => navigate('/connect')}> на след экран</Button>

            </div>
        </div>
    );
}
