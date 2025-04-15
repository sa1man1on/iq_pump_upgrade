import cls from './TournamentLayout.module.scss'
import head_placeholder from '../../assets/head_placeholder.png'
import { Outlet } from "react-router-dom";
import up_arrow from '../../assets/up_arrow.svg'
import {FC} from "react";
import clsx from "clsx";
import left_palceholder from "../../assets/green_layout.svg"
import right_palceholder from "../../assets/1.svg"
interface GameLayoutProps {
    isTournament?: boolean;
}

const TournamentLayout: FC<GameLayoutProps> = () => {

    return (
        <div>
            <div className={cls.LayoutWrapper}>
                <div className={cls.LeftOpponent}>
                    <div className={cls.avatar}></div>
                    <img className={cls.head_img} src={head_placeholder} alt=""/>
                    <div className={cls.reward_container}>
                        <img src={left_palceholder} className={clsx(cls.reward, cls.reward_left)} alt=''></img>
                        <div className={cls.reward_amount}>- 200</div>
                        <div className={cls.glow_green}></div>
                    </div>
                </div>

                <div className={cls.middle_container}>
                    <img className={cls.up_arrow} src={up_arrow} alt=""/>
                    <div className={cls.tokens_bet}>
                        <div className={clsx(cls.bet, cls.small_bet)}>8 300</div>
                        <div className={clsx(cls.bet, cls.big_bet)}>8 300</div>
                    </div>
                    <div className={cls.timer}>47:03</div>
                </div>

                <div className={cls.RightOpponent}>
                    <div className={cls.avatar}></div>
                    <img className={clsx(cls.head_img, cls.head_img_right)} src={head_placeholder} alt=""/>
                    <div className={cls.reward_container}>
                        <img src={right_palceholder} className={clsx(cls.reward, cls.reward_left)} alt=''></img>
                        <div className={clsx(cls.reward_amount_right)}>+ 340</div>
                        <div className={cls.glow_pink}></div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default TournamentLayout;
