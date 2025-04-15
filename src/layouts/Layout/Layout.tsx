// TournamentLayout.jsx
import {Outlet, Link, useLocation} from 'react-router-dom';
import cls from './Layout.module.scss'
import {useTranslation} from "react-i18next";
import back_arrow from '../../assets/back_arrow.svg'

const Layout = () => {

    const location = useLocation();

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(newLang);
    };

    return (
        <div>
            <div className={cls.LayoutWrapper}>
                {location.pathname === '/' &&
                    <>
                        <div className={cls.aboutGame}>{t('about_game')}</div>
                        <button className={cls.lang} onClick={toggleLanguage}>
                            {i18n.language === 'ru' ? 'EN' : 'RU'}
                        </button>
                    </>

                }
                {location.pathname === '/connect' &&
                    <>
                        <Link to="/"><img src={back_arrow} alt="Назад" className={cls.backArrow}/></Link>
                        <button className={cls.lang} onClick={toggleLanguage}>
                            {i18n.language === 'ru' ? 'EN' : 'RU'}
                        </button>
                    </>
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default Layout;
