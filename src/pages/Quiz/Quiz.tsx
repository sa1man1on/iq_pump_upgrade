import cls from "./Quiz.module.scss";
import HeaderInfo from "../../components/HeaderInfo/HeaderInfo.tsx";
import Question from "../../components/Question/Question.tsx";
import AnswerOptions from "../../components/AnswerOptions/AnswerOptions.tsx";
import {useNavigate} from "react-router-dom";
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import Button from "../../components/buttons/Button/Button.tsx";
import ButtonSkip from "../../components/buttons/ButtonSkip/ButtonSkip.tsx";


function Quiz() {


    const navigate = useNavigate();

    const QUIZ_END_EMULATION = () => {
        navigate('/quiz_end')
    }


    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isAvatar={true}></GameLayout>
                <div className={cls.margin_top}></div>
                <HeaderInfo/>
                <div className={cls.wrapper}>
                    <Question/>
                    <AnswerOptions/>
                    <div className={cls.margin_top}></div>
                    <div className={cls.buttons_wrapper}>
                        <Button isPUMP={true}>
                            PUMP
                        </Button>
                        <ButtonSkip></ButtonSkip>
                    </div>


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

export default Quiz;
