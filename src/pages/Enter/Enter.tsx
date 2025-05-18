import cls from './Enter.module.scss';
import {useNavigate} from "react-router-dom";
import {useAppKit, useAppKitAccount} from "@reown/appkit/react";
import Button from "../../components/buttons/Button/Button.tsx";
import Logo from "../../components/Logo/Logo.tsx";
import Layout from "../../layouts/Layout/Layout.tsx";
import {useEffect, useState} from "react";
import {SafeTelegramParams} from "../../hooks/useEntrySource.ts";

type Source = 'telegram' | 'web'

export default function Enter() {
    const [addressIsGetted, setAddressIsGetted] = useState(false)
    const [source, setSource] = useState<Source>('web');
    const [telegramId, setTelegramId] = useState<number | undefined>();
    const [isAuthorized, setIsAuthorized] = useState(false)

    const {open} = useAppKit();
    const navigate = useNavigate();
    const {address, isConnected, caipAddress, status, embeddedWalletInfo,} = useAppKitAccount();

    const handleConnect = async () => {
        await open();
    };

    const isTg = typeof window !== 'undefined' && window?.Telegram?.WebApp;
    const launchParams = isTg ? SafeTelegramParams() : undefined;
    useEffect(() => {
        if (isTg) {
            setSource('telegram');
            const id = launchParams?.tgWebAppData?.user?.id;
            setTelegramId(id);
            console.log('Telegram ID:', id);
        } else {
            setSource('web');
        }
    }, [isTg, launchParams]);

    // финальная логика
    // 1) нажимаем open, получаем адрес пользователя - v
    // 2) если isTg true, то
    //                      делаю запрос на проверку notification/check, мне приходит либо есть пользователь с таким кошельком
    //                                                                                     если есть, то авторизую
    //                                                                                либо нет пользователя с таким кошельком
    //                                                                                     то я его регистрирую и авторизую
    //    если isTg false, то перенаправляю на коннект, на коннект используя полученный код через getCodeFromTelegram('erc-адрес') пользователь в боте привязывается к боту
    // получаю статус 200, то пользователь авторизован, если не 200, то не авторизован.... надо продумать эту срань
    //
    //
    //
    //


    // 2) если адрес получен, то проверяем есть ли пользователь с таким tg_id, есть нет не важно
    // 1. Если пользователь с таким телеграм id есть, то его состояние меняется на авторизован и перенаправляется на страницу quiz
    // 2. Если нет пользователя с таким телеграм id, то его надо отправить на страницу connect,
    //  На странице коннект, пользователь видит код полученный в методе getCodeFromTelegram('erc-адрес')
    //  После он нажимает Я отправил, отправляется запрос на
    //  const response = await axios.post('https://stt.market/api/notifications/check/', 'erc-адрес');
    //  Если в ответе статус 200, то значит аккаунт привязан, состояние меняется на авторизован и перенаправляется на страницу quiz
    //  Если статус не 200, то аккаунт не привязан и просим пользователя повторить попытку.


    // useEffect(() => {
    //     if (address !== undefined) {
    //         console.log('address has been received:', address);
    //
    //         // если просто нужно отметить, что адрес получен, лучше:
    //         setAddressIsGetted(true);
    //
    //         // асинхронная функция внутри useEffect
    //
    //         console.log('check notification');
    //         console.log('on address', address);
    //
    //         axios.post('https://stt.market/api/notifications/check/', {
    //                 address: 12345,
    //             },
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             }).then(
    //             response => {
    //                 console.log(response.data.status);
    //             }
    //         ).catch(error => console.log('Error checking notifications:', error))
    //
    //
    //     }
    // }, [address]);

    // useEffect(() => {
    //     if (telegramId === undefined) {
    //         console.log('делаем запрос на https://stage.iqpump.online/api/fetch_user');
    //         axios.post(
    //             'https://stage.iqpump.online/api/fetch_user',
    //             {
    //                 chat_id: 12345676789,//telegramId,
    //                 language: 'ru' // добавить в глобальный слайс
    //             },
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             }
    //         ).then(response => {
    //             console.log(response.data.status);
    //
    //             if (response.data.status === 200) {
    //                 setIsAuthorized(true)
    //                 // navigate('/quiz');
    //             }
    //
    //
    //         }).catch(error => {
    //             console.error('Ошибка запроса:', error);
    //         });
    //     }
    // }, [telegramId, addressIsGetted]);

/////////////////////////////////////////////////////////


    // useEffect(() => {
    //     console.table({isConnected, address, caipAddress, status, embeddedWalletInfo});
    // }, [isConnected, address, caipAddress, status, embeddedWalletInfo]);

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <Layout/>
                <div className={cls.logoWrapper}>
                    <Logo/>
                </div>
                <div className={cls.buttonWrapper}>
                    <Button onClick={handleConnect}>
                        {address ? 'Authorized ERC20' : 'Connect ERC20'}
                    </Button>
                </div>
                <Button onClick={() => navigate('/connect')}>на след экран</Button>
            </div>
        </div>
    );
}
