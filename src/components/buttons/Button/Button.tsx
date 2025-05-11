import cls from './Button.module.scss'
import {ReactNode} from "react";
import clsx from "clsx";


interface IButton {
    children?: ReactNode;
    onClick?: () => void;
    isPUMP?: boolean;
    isWhite?: boolean;
    isPink?: boolean;
    isDisabled?: boolean;
}

function Button({children, onClick, isWhite, isPink, isDisabled}: IButton) {

    return (
        <div className={cls.button_container}>
            <div className={cls.button_shadow_1}></div>
            <div className={cls.button_shadow_2}></div>
            <div className={cls.button_shadow_3}></div>
            <div className={cls.button_shadow_4}></div>
            <div className={cls.button_shadow_5}></div>

            <div className={cls.button_bg}></div>

            <button
                onClick={onClick}
                className={clsx(
                    cls.button,
                    cls.Button,
                    {
                        [cls.isPUMP]: true,
                        [cls.white]: isWhite,
                        [cls.pink]: isPink,
                        [cls.disable]: isDisabled,
                    })}
            >{children}
            </button>
        </div>);
}

export default Button;

