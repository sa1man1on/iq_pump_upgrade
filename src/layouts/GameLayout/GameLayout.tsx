import cls from './GameLayout.module.scss'
import hexagon from '../../assets/hexagon.svg'
import hexagon_big from '../../assets/hexagon_big.svg'
import head_placeholder from '../../assets/head_placeholder.png'
import clsx from "clsx";
import {Outlet, useNavigate} from "react-router-dom";
import {FC} from "react";
import hexagon_iq from '../../assets/hexagon_iq.svg'

interface GameLayoutProps {
    isTotalAnswersSum?: boolean;
    isProfile?: boolean;
    isAvatar?: boolean;
    isTransactions?: boolean;
    isTournamentCreation?: boolean;
    // isTournamentSection?: boolean;

}

const GameLayout: FC<GameLayoutProps> = ({
                                             isTotalAnswersSum,
                                             isProfile,
                                             isAvatar,
                                             isTransactions,
                                             isTournamentCreation,
                                             // isTournamentSection
                                         }) => {

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

                    {/*{isBack &&*/}
                    {/*    <>*/}
                    {/*        <img className={cls.backArrow} src={back_arrow} alt=""/>*/}
                    {/*    </>*/}
                    {/*}*/}

                    {isTournamentCreation &&
                        <div
                            onClick={() => navigate('/quiz')}
                            className={clsx(cls.hex_iq_container)}>
                            <img className={cls.hex_iq_small} src={hexagon_iq} alt=""/>
                            <div className={cls.hex_iq_text}>IQ</div>
                            <img className={cls.hex_iq_big} alt="" src={hexagon_iq}/>
                        </div>
                    }
                    {isProfile &&
                        <div
                            onClick={() => navigate('/quiz')}
                            className={clsx(cls.hex_iq_container)}>
                            <img className={cls.hex_iq_small} src={hexagon_iq} alt=""/>
                            <div className={cls.hex_iq_text}>IQ</div>
                            <img className={cls.hex_iq_big} alt="" src={hexagon_iq}/>
                        </div>
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

                        {isTotalAnswersSum && <div className={cls.totalRightAnswers}>150</div>}

                        <div
                            className={clsx(cls.hex, cls.hexSmall, cls.hex_text)}
                            onClick={() => navigate("/tournament_menu")}
                        >
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
