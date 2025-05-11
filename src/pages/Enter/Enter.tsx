import cls from './Enter.module.scss';

import {useNavigate} from "react-router-dom";
import {useWalletProvider} from "../../contexts/wallet-context.tsx";
import {useAppKit} from "@reown/appkit/react";
import {useState} from "react";
import Button from "../../components/buttons/Button/Button.tsx";
import Logo from "../../components/Logo/Logo.tsx";
import Layout from "../../layouts/Layout/Layout.tsx";
import axios from "axios";
import {useEntrySource} from "../../hooks/useEntrySource.ts";


export default function Enter() {
    const navigate = useNavigate();
    const entrySource = useEntrySource();   // 'telegram' | 'web'

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
            console.log('Пользователь авторизовался через метамаск --> ', addr);
        }

        const requestData: { account: string } = {account: addr}

        // есть ли пользователь в бд?
        const response = await axios.post('https://stt.market/api/notifications/check/', requestData);

        // 1. Если это происходит в мини-апп
        if (entrySource == 'telegram') {

        }
        if (response.status === 200) {
            // Привязан ли он к боту в тг?
            //2. Спрашиваю бек привязан ли такой id к телеге?
            // 1) Получаю id телеги
            // 2) Проверяю есть ли такой пользователь в сервисе
            // // для этого нужно - отправить за запрос на 'https://stage.iqpump.online/api/fetch_user'(туда передать телеграм айди) и он автоматически его зарегистрирует, если его нет
            // а если есть то завершаю авторизацию - перенапрвляю на страницу квиз
            navigate('/quiz')

            // const userId = useAppSelector(state => state.game.user?.userId);
            // const userData = {
            //     user_id: userId,
            //     language: 'ru'
            // }

        }
        // если не привязан к боту в тг, то
        if (response.status !== 200) {
            navigate('/connect')
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
