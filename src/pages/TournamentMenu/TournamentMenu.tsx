import cls from "./Tournaments.module.scss"
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import head_placeholder from '../../assets/head_placeholder_3.png'
import OpponentCard from "../../components/OpponentCard/OpponentCard.tsx";
import {useNavigate} from "react-router-dom";

function TournamentMenu() {
    const navigate = useNavigate();

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isTotalAnswersSum={true} isProfile={true}/>
                <div className={cls.scroll_wrapper}>
                    <div className={cls.vs_container}>

                        <div className={cls.avatar_left}>
                            <img src={head_placeholder} alt=""/>
                        </div>

                        <div className={cls.vs_text}>Vs</div>

                        <div className={cls.avatar_right}>
                            <img src={head_placeholder} alt=""/>
                        </div>

                        <button
                            onClick={() => navigate('/tournament_creation')}
                            className={cls.createTournamentButton}>
                            Создать
                            <br/>
                            турнир
                        </button>

                    </div>

                    <div className={cls.opponent_container}>
                        <div className={cls.choose_opponent}>
                            Выбери оппонента
                        </div>
                        <div className={cls.opponent_cards_container}>
                            <div className={cls.card_grid}>
                                <OpponentCard isAcceptedTournament={true}/>
                                <OpponentCard isRunningTournament={true}/>
                                <OpponentCard/>
                                <OpponentCard/>
                                <OpponentCard/>
                                <OpponentCard/>
                                <OpponentCard/>
                                <OpponentCard/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default TournamentMenu;