import cls from './HeaderInfo.module.scss'

function HeaderInfo() {
    return (
        <div className={cls.wrapper}>

            <div className={cls.progress}>
                1\12
            </div>

            <div className={cls.profit}>
                +567.91
            </div>

            <div className={cls.balance}>
                981.89
            </div>

        </div>
    );
}

export default HeaderInfo;