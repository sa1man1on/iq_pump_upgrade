import cls from "./CancelButton.module.scss";

interface CancelButtonI {
    onClick: () => void;
    children: string;
}

function CancelButton({children, onClick}: CancelButtonI) {
    return (
        <button
            onClick={onClick}
            className={cls.button_cancel}>{children}</button>
    );
}

export default CancelButton;