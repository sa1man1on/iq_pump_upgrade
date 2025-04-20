import cls from './AnswerOptions.module.scss';
import {useState} from "react";
import AnswerButton from "../buttons/AnswerButton/AnswerButton.tsx";

interface AnswerOptionsProps {
    isSubmittedAnswer: boolean;
}

function AnswerOptions({isSubmittedAnswer}: AnswerOptionsProps) {
    const [chosenAnswer, setChosenAnswer] = useState<number | null>(null);
    const correctAnswer = 2; // номер правильного ответа (пример)

    const handleClick = (index: number) => {
        if (!isSubmittedAnswer) {
            setChosenAnswer(index);
        }
    };

    return (
        <div className={cls.outer_wrapper}>
            <div className={cls.wrapper}>
                {[1, 2, 3, 4].map((item) => (
                    <AnswerButton
                        key={item}
                        isChosen={chosenAnswer === item}
                        isCorrect={
                            isSubmittedAnswer
                                ? item === correctAnswer
                                : undefined
                        }
                        onClick={() => handleClick(item)}
                    >
                        Вариант ответа с большим количеством текста так чтобы было три строки {item}
                    </AnswerButton>
                ))}
            </div>
        </div>
    );
}

export default AnswerOptions;