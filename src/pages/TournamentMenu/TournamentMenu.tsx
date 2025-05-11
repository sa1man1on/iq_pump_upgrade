import cls from "./Tournaments.module.scss"
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import head_placeholder from '../../assets/head_placeholder_3.png'
import OpponentCard from "../../components/OpponentCard/OpponentCard.tsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/buttons/Button/Button.tsx";

function TournamentMenu() {
    const navigate = useNavigate();

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isTotalAnswersSum={true} isProfile={true}/>
                <div className={cls.scroll_wrapper}>
                    <div className={cls.vs_container}>

                        <div className={cls.avatar_container}>
                            <div className={cls.avatar_left}>
                                <img src={head_placeholder} alt=""/>
                            </div>
                            <div className={cls.vs_text}>Vs</div>
                            <div className={cls.avatar_right}>
                                <img src={head_placeholder} alt=""/>
                            </div>
                        </div>


                        <div className={cls.createTournamentButton}>
                            <Button
                                onClick={() => navigate('/tournament_create')}
                            >
                                Создать
                                <br/>
                                турнир
                            </Button>
                        </div>


                    </div>

                    <div className={cls.opponent_container}>
                        <div className={cls.choose_opponent}>
                            Выбери оппонента
                        </div>
                        <div className={cls.opponent_cards_container}>
                            <div className={cls.card_grid}>
                                <OpponentCard
                                    isAcceptedTournament={true}
                                    tournamentStart="2025-05-04T18:30:00Z"   // или new Date(...)
                                />
                                <OpponentCard
                                    isRunningTournament={true}
                                    tournamentStart="2025-05-04T18:30:00Z"   // или new Date(...)
                                />
                                <OpponentCard
                                    tournamentStart="2025-05-04T18:30:00Z"   // или new Date(...)
                                />
                                <OpponentCard
                                    tournamentStart="2025-05-04T18:30:00Z"   // или new Date(...)
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default TournamentMenu;