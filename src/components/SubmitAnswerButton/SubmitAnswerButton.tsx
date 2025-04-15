import cls from './SubmitAnswerButton.module.scss'
import {ReactNode} from "react";

interface ISubmitAnswerButton {
    onClick: () => void;
    children: ReactNode;
}

function SubmitAnswerButton(props:ISubmitAnswerButton) {
    const {onClick} = props
    return (
        <button onClick={onClick} className={cls.wrapper}>
            PUMP
        </button>
    );
}

export default SubmitAnswerButton;