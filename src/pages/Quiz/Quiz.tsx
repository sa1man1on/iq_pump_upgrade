import cls from "./Quiz.module.scss";
import HeaderInfo from "../../components/HeaderInfo/HeaderInfo.tsx";
import Question from "../../components/Question/Question.tsx";
import AnswerOptions from "../../components/AnswerOptions/AnswerOptions.tsx";
import SubmitAnswerButton from "../../components/SubmitAnswerButton/SubmitAnswerButton.tsx";
import {useState} from "react";
import TournamentLayout from "../../layouts/TournamentLayout/TournamentLayout.tsx";
import {useNavigate} from "react-router-dom";



function Quiz() {

    const handleClick = () => {
        setIsSubmittedAnswer(prevState => !prevState);
    };

    const navigate = useNavigate();

    const QUIZ_END_EMULATION = () =>{
        navigate('/quiz_end')
    }

    const [isSubmittedAnswer, setIsSubmittedAnswer] = useState(false)

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <TournamentLayout></TournamentLayout>
                <HeaderInfo />
                <div className={cls.wrapper}>
                    <Question />
                    <AnswerOptions isSubmittedAnswer={isSubmittedAnswer}/>
                    <div className={cls.margin_top}></div>
                    <SubmitAnswerButton onClick={handleClick}>PUMP</SubmitAnswerButton>
                    <button
                        onClick={QUIZ_END_EMULATION}
                        className='QUIZ_END_EMULATION'
                    >Закончить квиз</button>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
