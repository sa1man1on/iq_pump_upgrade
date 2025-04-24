import cls from "./TournamentCreation.module.scss"
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import TournamentCreationSettings from "../../components/TournamentCreationSettings/TournamentCreationSettings.tsx";
import CancelButton from "../../components/buttons/CancelButton/CancelButton.tsx";
import Timer from "../../components/Timer/Timer.tsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/buttons/Button/Button.tsx";


function TournamentCreation() {
    const navigate = useNavigate();

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isTotalAnswersSum={true} isTournamentCreation={true}/>
                <div className={cls.TaskCreationContainer}>
                    <div className={cls.glow}>
                    </div>
                    <TournamentCreationSettings></TournamentCreationSettings>
                    <Timer></Timer>

                    <div className={cls.margin_top}>
                        <Button isPUMP={true}>Создать</Button>
                    </div>

                    <CancelButton
                        onClick={() => navigate('/add_task')}
                    >отменить</CancelButton>

                    {/*Почему эту кнопку Button не видно */}
                </div>
            </div>
        </div>
    );
}

export default TournamentCreation;