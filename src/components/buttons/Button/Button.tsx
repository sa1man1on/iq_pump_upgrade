


import cls from './Button.module.scss'


interface IButton {
    children?: any;
    onClick?: () => void;
}

function Button({children, onClick}:IButton) {
    return (
        <button onClick={onClick} className={cls.Button}>{children}</button>
    );
}

export default Button;