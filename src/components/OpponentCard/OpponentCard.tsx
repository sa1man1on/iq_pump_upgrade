import {useEffect, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import cls from "../OpponentCard/OpponentCard.module.scss";
import head_placeholder_2 from "../../assets/head_placeholder_2.png";
import clsx from "clsx";

interface OpponentCardI {
    isRunningTournament?: boolean;
    isAcceptedTournament?: boolean;
    /** Дата/время старта турнира. ISO‑строка или объект Date/число‑timestamp */
    tournamentStart: string | number | Date;
}

function OpponentCard({
                          isAcceptedTournament,
                          isRunningTournament,
                          tournamentStart,
                      }: OpponentCardI) {
    const navigate = useNavigate();

    /*--------------------------------------------------
     * 1. Определяем целевой маршрут
     *--------------------------------------------------*/
    const targetRoute = useMemo(() => {
        if (isRunningTournament) return "/tournament_running";
        if (isAcceptedTournament) return "/tournament_accepted";
        return "/tournament_waiting";
    }, [isAcceptedTournament, isRunningTournament]);

    /*--------------------------------------------------
     * 2. Таймер
     *--------------------------------------------------*/
    const getDiff = () => {
        const startTs = new Date(tournamentStart).getTime();
        const diff = Math.max(startTs - Date.now(), 0); // не допускаем «‑»
        const h = Math.floor(diff / 3_600_000);
        const m = Math.floor((diff % 3_600_000) / 60_000);
        const s = Math.floor((diff % 60_000) / 1_000);
        return [h, m, s]
            .map((n) => n.toString().padStart(2, "0"))
            .join(":");
    };

    const [timeLeft, setTimeLeft] = useState<string>(getDiff);

    useEffect(() => {
        // Обновляем каждую секунду
        const id = setInterval(() => {
            setTimeLeft(getDiff());
        }, 1_000);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tournamentStart]);

    /*--------------------------------------------------
     * 3. Рендер
     *--------------------------------------------------*/
    return (
        <div
            className={clsx(cls.opponent_card, {
                [cls.accepted]: isAcceptedTournament,
                [cls.running]: isRunningTournament,
            })}
            onClick={() => navigate(targetRoute)}
        >
            <div className={cls.opponent_card_label}>
                <div className={cls.opponent_coins}>23456134</div>
            </div>

            <img alt="" src={head_placeholder_2} className={cls.opponent_image}/>

            <div className={cls.opponent_difficulty}>
                <div className={clsx(cls.opponent_difficulty_stage, cls.active)}/>
                <div className={clsx(cls.opponent_difficulty_stage, cls.active)}/>
                <div className={cls.opponent_difficulty_stage}/>
            </div>

            <div className={cls.opponent_timer}>
                <div className={cls.text}>Start in</div>
                <div className={cls.time}>{timeLeft}</div>
            </div>
        </div>
    );
}

export default OpponentCard;
