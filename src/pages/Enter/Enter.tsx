import cls from './Enter.module.scss';

import {useNavigate} from "react-router-dom";

import {useTranslation} from "react-i18next";
import Button from "../../components/buttons/Button/Button.tsx";
import Logo from "../../components/Logo/Logo.tsx";
import Layout from "../../layouts/Layout/Layout.tsx";


export default function Enter() {
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>

                <Layout/>

                <div className={cls.logoWrapper}>
                    <Logo></Logo>
                </div>

                <div className={cls.buttonWrapper}>
                    <Button onClick={() => navigate('/connect')}>{t('Connect_ERC20')}</Button>
                </div>

            </div>
        </div>
    );
}
