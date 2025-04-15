import cls from './BetInput.module.scss'
function BetInput() {
    return (
        <div className={cls.bet_input_wrapper}>
            <div className={cls.header}>ставка</div>
            <input className={cls.input} type="text" placeholder='0'/>
            <div className={cls.min_max_input_tip}>
                min. 100 max 204 507
            </div>
        </div>
    );
}

export default BetInput;