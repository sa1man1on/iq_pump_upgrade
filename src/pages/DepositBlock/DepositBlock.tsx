import cls from './DepositBlock.module.scss';
import Button from "../../components/buttons/Button/Button.tsx";

function DepositBlock() {
    return (
        <div className={cls.wrapper}>
            <div className={cls.header}>ПОПОЛНЕНИЕ</div>
            <input className={cls.inputMoney} placeholder={'0,00'}></input>
            {/*Добавить логику когда хватает и когда не хватает монет - хватает - зелёный, не хватает - красный*/}
            <div className={cls.max_min_val}>607,18 - 5467</div>
            <div className={cls.description}>Пополнение будет произведено с вашего ERC20-счета</div>
            <div className={cls.address}>0hdy98ygg787y4647g78yg5698h</div>

            <Button>
                Подтвердить
            </Button>

        </div>
    );
}

export default DepositBlock;
