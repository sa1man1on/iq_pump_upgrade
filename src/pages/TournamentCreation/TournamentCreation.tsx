import cls from "./TournamentCreation.module.scss"
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import TournamentCreationSettings from "../../components/TournamentCreationSettings/TournamentCreationSettings.tsx";
import ButtonAction from "../../components/buttons/ButtonAction/ButtonAction.tsx";
import CancelButton from "../../components/buttons/CancelButton/CancelButton.tsx";
import Timer from "../../components/Timer/Timer.tsx";




function TournamentCreation() {

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isTournament={true}/>
                <div className={cls.TaskCreationContainer}>
                    <div className={cls.glow}>
                    </div>
                    <TournamentCreationSettings></TournamentCreationSettings>
                    <Timer></Timer>
                    <ButtonAction>Создать</ButtonAction>
                    <CancelButton>отменить</CancelButton>
                </div>
            </div>
        </div>
    );
}

export default TournamentCreation;