// src/Header.js
import cls from './Header.module.scss';
import {useLocation, useNavigate} from "react-router-dom";
import back_arrow from './back_arrow.svg'
export default function Header({ onLanguageToggle, currentLang }) {
    const location = useLocation();
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    return (
            <header className={cls.Header}>
                <div className={cls.Left}>
                    {location.pathname === '/' && (
                        <button className={cls.Button}>Об игре</button>
                    )}

                    {location.pathname === '/second' && (
                        <button className={cls.back_arrow} onClick={handleBack}><img src={back_arrow} alt=""/></button>
                    )}

                    {/*<button onClick={() => navigate('/info')} className={cls.Button}>Об игре</button>*/}
                </div>
                <div className={cls.Right}>
                    <button className={cls.Button} onClick={onLanguageToggle}>
                        {currentLang === 'ru' ? 'RU' : 'EN'}
                    </button>
                </div>
            </header>
    );
}
