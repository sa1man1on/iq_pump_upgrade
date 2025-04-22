import cls from './ButtonSkip.module.scss'
import clsx from "clsx";
import double_arrows from '../../../assets/double_arrows.svg'

interface IButton {
    onClick?: () => void;
    isPUMP?: boolean;
}

function ButtonSkip({onClick}: IButton) {

    return (

        <button
            onClick={onClick}
            className={clsx(
                cls.button,
                cls.Button,
                {[cls.isPUMP]: true,})}
        >
            <img className={cls.svg} src={double_arrows} alt=""/>
        </button>);
}

export default ButtonSkip;