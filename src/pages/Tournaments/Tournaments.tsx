import cls from "./Tournaments.module.scss"
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";

import head_placeholder from '../../assets/head_placeholder_3.png'
import OpponentCard from "../../components/OpponentCard/OpponentCard.tsx";

function Tournaments() {

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isTournament={true}/>
                <div className={cls.vs_container}>

                    <div className={cls.avatar_left}>
                        <img src={head_placeholder} alt=""/>
                    </div>

                    <div className={cls.vs_text}>Vs</div>

                    <div className={cls.avatar_right}>
                        <img src={head_placeholder} alt=""/>
                    </div>

                    <button className={cls.createTournamentButton}>Создать <br/> турнир</button>
                </div>

                <div className={cls.opponent_container}>
                    <div className={cls.choose_opponent}>Выбери оппонента</div>
                    <div className={cls.card_grid}>
                        <OpponentCard/>
                        <OpponentCard/>
                        <OpponentCard/>
                        <OpponentCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tournaments;