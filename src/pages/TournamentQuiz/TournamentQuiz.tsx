import cls from "./TournamentQuiz.module.scss";
import HeaderInfo from "../../components/HeaderInfo/HeaderInfo.tsx";
import Question from "../../components/Question/Question.tsx";
import AnswerOptions from "../../components/AnswerOptions/AnswerOptions.tsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/buttons/Button/Button.tsx";
import TournamentLayout from "../../layouts/TournamentLayout/TournamentLayout.tsx";


function TournamentQuiz() {


    const navigate = useNavigate();

    const QUIZ_END_EMULATION = () => {
        navigate('/quiz_end')
    }

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>

                <TournamentLayout></TournamentLayout>
                <div className={cls.margin_top}></div>
                <HeaderInfo/>
                <div className={cls.wrapper}>
                    <Question/>
                    <AnswerOptions/>
                    <div className={cls.margin_top}></div>
                    <Button isPUMP={true}>
                        PUMP
                    </Button>

                    <button
                        style={{
                            display: "block",
                        }}
                        onClick={QUIZ_END_EMULATION}>
                        пропустить
                    </button>

                </div>
            </div>
        </div>
    );
}

export default TournamentQuiz;
