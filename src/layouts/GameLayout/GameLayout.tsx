import cls from './GameLayout.module.scss'
import hexagon from '../../assets/hexagon.svg'
import hexagon_big from '../../assets/hexagon_big.svg'
import head_placeholder from '../../assets/head_placeholder.png'
import hexagon_iq from '../../assets/hexagon_iq.svg'
import clsx from "clsx";
import { Outlet, useNavigate } from "react-router-dom";
import back_arrow from '../../assets/back_arrow.svg'
import {FC, useState} from "react";

interface GameLayoutProps {
    isTournament?: boolean;
    isProfile?: boolean;
    isAvatar?: boolean;
    isTransactions?: boolean;
}

const GameLayout: FC<GameLayoutProps> = ({ isTournament, isProfile, isAvatar, isTransactions}) => {
    const [isBack] = useState(false)
    const [isVs] = useState(false)

    const navigate = useNavigate();

    return (
        <div>
            <div className={cls.LayoutWrapper}>
                <div className={cls.LeftButton}>
                    {isAvatar &&
                        <>
                            <img src={head_placeholder} alt="" onClick={() => navigate('/profile')}/>
                        </>
                    }

                    {isBack &&
                        <>
                            <img className={cls.backArrow} src={back_arrow} alt=""/>
                        </>
                    }

                    {isVs &&
                        <div className={clsx(cls.hex_iq_container)}>
                            <img className={cls.hex_iq_small} src={hexagon_iq} alt=""/>
                            <img className={cls.hex_iq_big} alt="" src={hexagon_iq}/>
                        </div>
                    }
                    {isProfile &&
                        <>
                            <img className={clsx(cls.backArrow, cls.margin_left)}
                                 src={back_arrow} alt=""
                                 onClick={()=> navigate('/quiz')}
                            />
                        </>
                    }
                    {isTransactions &&
                        <>
                            <img src={head_placeholder} alt="" onClick={() => navigate('/profile')}/>
                        </>
                    }
                </div>

                <div
                    onClick={() =>
                        navigate(`/transactions?open=transactionsBlock&refresh=${Date.now()}`)
                    }
                    className={cls.tokens}
                >234 098.45
                </div>

                <div className={cls.RightButton}>
                    <div className={cls.hex_container}>
                        <div className={clsx(cls.hex, cls['hexBig'])}>
                            <img className={cls.hexBig} src={hexagon_big} alt=""/>
                        </div>

                        {isTournament && <div className={cls.totalRightAnswers}>150</div>}

                        <div className={clsx(cls.hex, cls.hexSmall, cls.hex_text)}>
                            <img src={hexagon} alt=""/>
                            <span className={cls.hex_text}>Vs</span>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default GameLayout;
