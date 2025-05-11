import cls from "./AnswerOptions.module.scss";
import AnswerButton from "../buttons/AnswerButton/AnswerButton";
import clsx from "clsx";


function AnswerOptions() {


    return (
        <div className={cls.answer_options_wrapper}>
            <div className={clsx(cls.line_top, cls.margin)}>
                <AnswerButton
                    isChosen={false}
                    isCorrect={undefined}
                >
                    Это строка длиной 30 символов!
                </AnswerButton>
                <AnswerButton
                    isChosen={false}
                    isCorrect={undefined}
                >
                    2
                </AnswerButton>
            </div>

            <div className={clsx(cls.line_bottom, cls.margin)}>
                <AnswerButton
                    isChosen={false}
                    isCorrect={undefined}
                >
                    3
                </AnswerButton>
                <AnswerButton
                    isChosen={false}
                    isCorrect={undefined}
                >
                    4
                </AnswerButton>
            </div>


        </div>
    );
}

export default AnswerOptions;
