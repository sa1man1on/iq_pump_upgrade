
import cls from "../OpponentCard/OpponentCard.module.scss";
import head_placeholder_2 from "../../assets/head_placeholder_2.png";
import clsx from "clsx";
import {useNavigate} from "react-router-dom";

function OpponentCard() {
    const navigate = useNavigate();
    return (
        <div className={cls.opponent_card} onClick={() => navigate("/tournamentcard")}>

            <div className={cls.opponent_card_label}>
                <div className={cls.opponent_coins}>234 561.34</div>
            </div>

            <img src={head_placeholder_2} className={cls.opponent_image}/>

            <div className={cls.opponent_difficulty}>
                <div className={clsx(cls.opponent_difficulty_stage, cls.active)}></div>
                <div className={clsx(cls.opponent_difficulty_stage, cls.active)}></div>
                <div className={cls.opponent_difficulty_stage}></div>
            </div>

            <div className={cls.opponent_timer}>
                <div className={cls.text}>Start in</div>
                <div className={cls.time}>16:43:07</div>
            </div>

        </div>
    );
}

export default OpponentCard;