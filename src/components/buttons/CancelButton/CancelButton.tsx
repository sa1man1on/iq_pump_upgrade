import cls from "./CancelButton.module.scss";

function CancelButton({children}:any) {
    return (
        <button className={cls.button_cancel}>{children}</button>
    );
}

export default CancelButton;