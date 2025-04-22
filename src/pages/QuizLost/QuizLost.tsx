import cls from "./QuizLost.module.scss";
import TournamentLayout from "../../layouts/TournamentLayout/TournamentLayout.tsx";
import Button from "../../components/buttons/Button/Button.tsx";

function QuizLost() {


    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <TournamentLayout></TournamentLayout>
                <div className={cls.wrapper}>
                    <div className={cls.you}>
                        YOU
                        <div className={cls.glow}></div>
                    </div>
                    <div className={cls.win}>
                        LOST
                    </div>

                    <div className={cls.background_letters}>
                        <div className={cls.you}>
                            YOU
                        </div>
                        <div className={cls.win}>
                            LOST
                        </div>
                    </div>
                    <div className={cls.btn_wrapper}>
                        <Button
                            isPink={true}
                        >OK</Button>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default QuizLost;
