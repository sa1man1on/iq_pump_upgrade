import cls from './LevelInfo.module.scss';

function LevelInfo() {
    return (
        <div className={cls.wrapper}>

            <div className={cls.inner_wrapper}>

                <div className={cls.some_number}>
                    1500
                </div>

                <div className={cls.name}>
                    <div className={cls.content}>
                        <h1 className={cls.title}>Rapira-rapid
                            <div className={cls.aurora}>
                                <div className={cls.aurora__item}></div>
                                <div className={cls.aurora__item}></div>
                                <div className={cls.aurora__item}></div>
                                <div className={cls.aurora__item}></div>
                            </div>
                        </h1>
                    </div>
                </div>

                <div className={cls.multiplier}>
                    <span>x</span>1,5
                </div>

            </div>

        </div>
    );
}

export default LevelInfo;
