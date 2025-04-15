import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import WithdrawalBlock from "../WithdrawalBlock/WithdrawalBlock.tsx";
import DepositBlock from "../DepositBlock/DepositBlock.tsx";
import TransactionsBlock from "../TransactionsBlock/TransactionsBlock.tsx";

import cls from './Transactions.module.scss'
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";

function Transactions() {
    const [searchParams] = useSearchParams();

    // Локальные стейты
    const [isTransactions, setIsTransactions] = useState(false);
    const [isDeposit, setIsDeposit] = useState(false);
    const [isWithdrawal, setIsWithdrawal] = useState(false);

    // При первом рендере, а также при изменении searchParams
    // проверяем, нет ли там запроса "open=transactionsBlock"
    useEffect(() => {
        const openParam = searchParams.get("open");
        if (openParam === "transactionsBlock") {
            setIsTransactions(true);
            setIsWithdrawal(false);
            setIsDeposit(false);
        }
    }, [searchParams]);

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isTransactions={true} />

                <div className={cls.buttons_container}>
                    <div
                        className={cls.deposit}
                        onClick={() => {
                            setIsTransactions(false);
                            setIsDeposit(true);
                            setIsWithdrawal(false);
                        }}
                    >
                        Пополнение
                    </div>
                    <div
                        className={cls.withdrawal}
                        onClick={() => {
                            setIsTransactions(false);
                            setIsDeposit(false);
                            setIsWithdrawal(true);
                        }}
                    >
                        Вывод
                    </div>
                </div>

                <div className={cls.Transactions_wrapper}>
                    {isTransactions && <TransactionsBlock />}
                    {isWithdrawal && <WithdrawalBlock />}
                    {isDeposit && <DepositBlock />}
                </div>
            </div>
        </div>
    );
}

export default Transactions;
