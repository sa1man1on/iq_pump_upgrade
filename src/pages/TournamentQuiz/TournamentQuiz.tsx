import cls from "./TournamentQuiz.module.scss";
import HeaderInfo from "../../components/HeaderInfo/HeaderInfo.tsx";
import Question from "../../components/Question/Question.tsx";
import AnswerOptions from "../../components/AnswerOptions/AnswerOptions.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../components/buttons/Button/Button.tsx";
import TournamentLayout from "../../layouts/TournamentLayout/TournamentLayout.tsx";


function TournamentQuiz() {

    const handleClick = () => {
        setIsSubmittedAnswer(prevState => !prevState);
    };

    const navigate = useNavigate();

    const QUIZ_END_EMULATION = () => {
        navigate('/quiz_end')
    }

    const [isSubmittedAnswer, setIsSubmittedAnswer] = useState(false)

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
                    <Button isPUMP={true} onClick={
                        handleClick
                    }>
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
