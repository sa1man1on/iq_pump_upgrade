import cls from './TokensBet.module.scss';
import clsx from "clsx";

function TokensBet() {
    return (
        <div className={cls.tokens_bet}>
            <div className={clsx(cls.bet, cls.small_bet)}>8 300</div>
            <div className={clsx(cls.bet, cls.big_bet)}>8 300</div>
        </div>
    );
}

export default TokensBet;
