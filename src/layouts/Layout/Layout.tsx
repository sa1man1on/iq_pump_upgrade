// TournamentLayout.jsx
import {Link, Outlet, useNavigate} from 'react-router-dom';
import cls from './Layout.module.scss'
import back_arrow from '../../assets/back_arrow.svg'
import LangSwitcher from "../../components/LangSwitcher/LangSwitcher.tsx";

const Layout = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className={cls.LayoutWrapper}>
                {location.pathname === '/' &&
                    <>
                        <div onClick={() => {
                            navigate('/about')
                        }} className={cls.aboutGame}>{'Об игре'}</div>

                        <LangSwitcher></LangSwitcher>
                    </>

                }
                {location.pathname === '/connect' &&
                    <>
                        <Link to="/">
                            <img src={back_arrow} alt="Назад" className={cls.backArrow}/>
                        </Link>
                        <LangSwitcher></LangSwitcher>
                    </>
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default Layout;
