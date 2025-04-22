import cls from './Button.module.scss'
import {ReactNode} from "react";
import clsx from "clsx";


interface IButton {
    children?: ReactNode;
    onClick?: () => void;
    isPUMP?: boolean;
    isWhite?: boolean;
}

function Button({children, onClick, isWhite}: IButton) {

    return (

        <button
            onClick={onClick}
            className={clsx(
                cls.button,
                cls.Button,
                {
                    [cls.isPUMP]: true,
                    [cls.white]: isWhite,
                })}
        >{children}
        </button>);
}

export default Button;