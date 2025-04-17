import cls from "./Tournament.module.scss";
import head_placeholder from "../../assets/head_robot.png";
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import clsx from "clsx";
import hex_1 from '../../assets/hexagon_big.svg'

function Tournament() {
    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isProfile={true}></GameLayout>
                <div className={cls.vs_container}>

                    <div className={cls.avatar_left}>
                        <img src={head_placeholder} alt=""/>

                        <div className={cls.avatar_title}>
                            <div className={cls.avatar_title_name}>
                                Raphael Tron
                            </div>
                            <div className={cls.avatar_title_rightAnswers}>
                                19
                            </div>
                        </div>

                    </div>

                    <div className={cls.vs_text}>V<span>s</span></div>

                    <div className={cls.avatar_right}>
                        <img src={head_placeholder} alt=""/>
                        <div className={clsx(cls.avatar_title, cls.avatar_title_right)}>
                            <div className={cls.avatar_title_name}>
                                Raphael Tron
                            </div>
                            <div className={cls.avatar_title_rightAnswers}>
                                19
                            </div>
                        </div>
                    </div>

                </div>

                <div className={cls.opponent_timer}>
                    <div className={cls.text}>Start in</div>
                    <div className={cls.time}>16:43:07</div>
                    <div className={cls.timer_background}>
                        <img alt='1' src={hex_1} className={cls.hex_1}></img>
                        <img alt='2' src={hex_1} className={cls.hex_2}></img>
                        <img alt='3' src={hex_1} className={cls.hex_3}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tournament;



