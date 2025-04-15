import cls from './DepositBlock.module.scss';

function DepositBlock() {
    return (
        <div className={cls.wrapper}>
            <div className={cls.header}>ПОПОЛНЕНИЕ</div>
            <input className={cls.inputMoney} placeholder={'0,00'}></input>
            <div className={cls.max_min_val}>607,18 - 5467</div>
            <div className={cls.description}>Пополнение будет произведено с вашего ERC20-счета</div>
            <div className={cls.address}>0hdy98ygg787y4647g78yg5698h</div>

            <div className={cls.btn_container}>
                <div className={cls.glow}></div>
                <button className={cls.btn}>Подтвердить</button>
            </div>

        </div>
    );
}

export default DepositBlock;
