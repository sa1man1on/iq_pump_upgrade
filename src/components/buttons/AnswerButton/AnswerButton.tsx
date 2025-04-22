import cls from './AnswerButton.module.scss';
import clsx from "clsx";
import {ReactNode} from "react";

interface AnswerButtonProps {
    children?: ReactNode;
    isChosen?: boolean;
    isCorrect?: boolean;
    onClick?: () => void;

}

function AnswerButton(props: AnswerButtonProps) {
    const {children, isChosen, isCorrect, onClick} = props;

    return (
        <div
            className={clsx(cls.wrapper, {
                [cls.chosen]: isChosen,
                [cls.correct]: isCorrect && isChosen,
                [cls.incorrect]: isChosen && isCorrect === false,
            })}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default AnswerButton;
