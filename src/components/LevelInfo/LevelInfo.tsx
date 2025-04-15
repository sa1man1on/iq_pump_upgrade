import cls from './LevelInfo.module.scss';

function LevelInfo() {
    return (
        <div className={cls.wrapper}>

            <div className={cls.inner_wrapper}>
                <div className={cls.some_number}>
                    1500
                </div>
                <div className={cls.name}>
                    Rapira-rapid
                </div>
                <div className={cls.multiplier}>
                    <span>x</span>1,5
                </div>
            </div>

        </div>
    );
}

export default LevelInfo;
