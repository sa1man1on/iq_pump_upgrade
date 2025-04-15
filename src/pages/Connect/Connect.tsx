
import cls from "./Connect.module.scss";
import Logo from "../../components/Logo/Logo.tsx";
import CodeInput from "../../components/CodeInput/CodeInput.js";
import Button from "../../components/buttons/Button/Button.js";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import Layout from "../../layouts/Layout/Layout.js";

function Connect() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const LoginSuccess = () =>{
        navigate('/quiz')
    }

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <Layout />
                <div className={cls.logoWrapper}>
                    <Logo/>
                </div>

                <div className={cls.text}>{t('To_start_the_game')}</div>
                <a  className={cls.link} href={'https://t.me/stt_info_bot'}>@stt_info_bot</a>
                <p className={cls.text_down}>{t('send_code')}</p>

                <div className={cls.code}><CodeInput></CodeInput></div>
                <div className={cls.alert}>{t('not_connected')}</div>
                <div className={cls.buttonWrapper}>
                    <Button onClick={LoginSuccess}>Подключиться</Button>
                </div>
            </div>

        </div>
    );
}

export default Connect;