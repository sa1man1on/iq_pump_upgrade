import cls from "./QuizWin.module.scss";
import TournamentLayout from "../../layouts/TournamentLayout/TournamentLayout.tsx";
import Button from "../../components/buttons/Button/Button.tsx";

function QuizWin() {


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
                        WIN
                    </div>

                    <div className={cls.background_letters}>
                        <div className={cls.you}>
                            YOU
                        </div>
                        <div className={cls.win}>
                            WIN
                        </div>
                    </div>
                    <div className={cls.btn_wrapper}><Button>OK</Button></div>


                </div>
            </div>
        </div>
    );
}

export default QuizWin;
