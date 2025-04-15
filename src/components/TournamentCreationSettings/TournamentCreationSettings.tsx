import cls from "./TournamentCreationSettings.module.scss";
import HeadImage from "../HeadImage/HeadImage.tsx";
import BetInput from "../BetInput/BetInput.tsx";
import Difficulty from "../Difficulty/Difficulty.tsx";

function TournamentCreationSettings() {
    return (
        <div className={cls.tournament_creation_settings_container}>



            <div className={cls.header_image_wrapper}>
                <HeadImage/>
                <div className={cls.error_message}>
                    Недостаточно монет на балансе
                    {/*В этот время у вас другой турнир*/}
                </div>
            </div>


            <div className={cls.middle_container}>
                <div className={cls.header}>Создание<br/>турнира</div>
                <BetInput></BetInput>
                <div className={cls.difficult_header}>
                    Сложность
                </div>
                <div className={cls.difficult_wrapper}><Difficulty isHorizontal={true}/></div>

            </div>

            <HeadImage isRight={true}/>

        </div>

    );
}

export default TournamentCreationSettings;