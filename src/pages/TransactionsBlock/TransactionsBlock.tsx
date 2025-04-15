import cls from './TransactionsBlock.module.scss';
import clsx from "clsx";

function TransactionsBlock() {
    return (
        <div className={cls.transactions}>
            <div className={cls.transactions_header}>Транзакции</div>
            <div className={cls.transactions_container}>
                <div className={cls.transactions_item}>
                    <div className={cls.transactions_item_amount}>+14 615,00</div>

                    <div className={cls.transactions_item_type}>пополнение</div>
                    <div className={cls.transactions_item_date}>12/02/2025</div>
                </div>
                <div className={clsx(cls.transactions_item, cls.transaction_deposit)}>
                    <div className={cls.transactions_item_amount}>+14 615,00</div>
                    <div className={cls.transactions_item_type}>вывод</div>
                    <div className={cls.transactions_item_date}>12/02/2025</div>
                </div>
            </div>
        </div>
    );
}

export default TransactionsBlock;
