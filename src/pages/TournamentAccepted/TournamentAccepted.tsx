import hex_1 from '../../assets/hexagon_big.svg'
import cls from "./TournamentAccepted.module.scss";
import head_placeholder from "../../assets/head_robot.png";
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import clsx from "clsx";

interface IN {
    isTimer?: boolean;
}

function TournamentAccepted({isTimer}: IN) {
    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isProfile={true}></GameLayout>
                <div className={cls.vs_container}>

                    <div className={clsx(cls.avatar_left, cls.avatar)}>
                        <img src={head_placeholder} alt=""/>

                        <div className={cls.avatar_title}>
                            <div className={clsx(cls.avatar_title_name, cls.avatar_title_name_left)}>
                                Raphael Tron
                            </div>
                            <div className={clsx(cls.avatar_title_rightAnswers, cls.left_answers)}>
                                19
                            </div>
                        </div>
                    </div>

                    <div className={cls.vs_text}>
                        V
                        <span>s</span>

                    </div>

                    <div className={clsx(cls.avatar_right, cls.avatar)}>
                        <img src={head_placeholder} alt=""/>
                        <div className={clsx(cls.avatar_title, cls.avatar_title_right)}>
                            <div className={clsx(cls.avatar_title_name, cls.avatar_title_name_right)}>
                                Raphael Tron
                            </div>
                            <div className={clsx(cls.avatar_title_rightAnswers, cls.right_answers)}>
                                19
                            </div>
                        </div>
                    </div>

                </div>
                <div className={cls.glow}></div>

                {isTimer &&
                    <div className={cls.opponent_timer}>
                        <div className={cls.text}>Start in</div>
                        <div className={cls.time}>16:43:07</div>
                        <div className={cls.timer_background}>
                            <img alt='1' src={hex_1} className={cls.hex_1}></img>
                            <img alt='2' src={hex_1} className={cls.hex_2}></img>
                            <img alt='3' src={hex_1} className={cls.hex_3}></img>
                        </div>
                    </div>}
            </div>
        </div>
    );
}

export default TournamentAccepted;






