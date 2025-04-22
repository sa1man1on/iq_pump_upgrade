import cls from './AnswerOptions.module.scss';
import AnswerButton from "../buttons/AnswerButton/AnswerButton.tsx";


function AnswerOptions() {


    return (
        <div className={cls.outer_wrapper}>
            <div className={cls.wrapper}>

                <AnswerButton
                    isChosen={false}
                    isCorrect={false}
                >Вариант ответа с большим количеством текста так чтобы
                </AnswerButton>

                <AnswerButton
                    isChosen={true}
                >Вариант ответа с большим количеством текста так чтобы
                </AnswerButton>

                <AnswerButton
                    isChosen={true}
                    isCorrect={true}
                >Вариант ответа с большим количеством текста так чтобы
                </AnswerButton>

                <AnswerButton
                    isChosen={true}
                    isCorrect={false}
                >Вариант ответа с большим количеством текста так чтобы
                </AnswerButton>
            </div>
        </div>
    );
}

export default AnswerOptions;