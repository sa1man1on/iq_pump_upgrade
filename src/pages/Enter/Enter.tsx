import styles from './Enter.module.scss';

import {useNavigate} from "react-router-dom";

import {useTranslation} from "react-i18next";
import Button from "../../components/buttons/Button/Button.tsx";
import Logo from "../../components/Logo/Logo.tsx";
import Layout from "../../layouts/Layout/Layout.tsx";


export default function Enter() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <div className={styles.PageWrapper}>
            <div className={styles.GameContainer}>

                <Layout />

                <div className={styles.logoWrapper}>
                    <Logo></Logo>
                </div>

                <div className={styles.buttonWrapper}>
                    <Button onClick={() => navigate('/connect')}>{t('Connect_ERC20')}</Button>
                </div>

            </div>
        </div>
            );
}
