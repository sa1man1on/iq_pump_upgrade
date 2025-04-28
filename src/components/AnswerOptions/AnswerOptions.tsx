import {useState} from "react";
import cls from "./AnswerOptions.module.scss";
import AnswerButton from "../buttons/AnswerButton/AnswerButton";

const variants = [
    "Вариант ответа с большим количеством текста так чтобы",
    "Вариант ответа с большим количеством текста так чтобы",
    "Вариант ответа с большим количеством текста так чтобы",
    "Вариант ответа с большим количеством текста так чтобы",
];

function AnswerOptions() {
    // null — ничто не выбрано; number — индекс выбранного варианта
    const [chosenIdx, setChosenIdx] = useState<number | null>(null);

    return (
        <div className={cls.outer_wrapper}>
            <div className={cls.wrapper}>
                {variants.map((text, idx) => (
                    <AnswerButton
                        key={idx}
                        isChosen={idx === chosenIdx}
                        /* Пока не знаем верных / неверных, передаём undefined */
                        isCorrect={undefined}
                        onClick={() => setChosenIdx(idx)}
                    >
                        {text}
                    </AnswerButton>
                ))}
            </div>
        </div>
    );
}

export default AnswerOptions;
