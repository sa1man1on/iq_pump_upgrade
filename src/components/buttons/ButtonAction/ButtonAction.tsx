import cls from './ButtonAction.module.scss'
function ButtonAction({children}:any) {
    return (
        <button className={cls.btn}>{children}</button>
    );
}

export default ButtonAction;