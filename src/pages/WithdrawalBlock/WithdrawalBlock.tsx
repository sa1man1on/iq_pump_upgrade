import cls from './WithdrawalBlock.module.scss';

function WithdrawalBlock() {
    return (
        <div className={cls.wrapper}>
            <div className={cls.header}>ВЫВОД</div>
            <input className={cls.inputMoney} placeholder={'0,00'}></input>
            <div className={cls.max_min_val}>607,18 - 5467</div>
            <div className={cls.description}>Сумма STT автоматически поступит на ваш счет</div>
            <div className={cls.address}>0hdy98ygg787y4647g78yg5698h</div>
            <div className={cls.description}>в течение 12 часов</div>
            <button className={cls.btn}>Подтвердить</button>

        </div>
    );
}

export default WithdrawalBlock;
