import cls from './Timer.module.scss';

function Timer() {
    return (
        <div className={cls.timer_wrapper}>
            <div className={cls.start_from}>Начать через</div>

            <div className={cls.timer_body}>
                <div className={cls.cell}>
                    <div className={cls.number_container}>15</div>
                    <div>часов</div>
                </div>
                <div className={cls.dots}>:</div>
                <div className={cls.cell}>
                    <div className={cls.number_container}>46</div>
                    <div>минут</div>
                </div>
            </div>

        </div>
    );
}

export default Timer;
