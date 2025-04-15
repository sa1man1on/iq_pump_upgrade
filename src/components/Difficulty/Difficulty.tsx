import cls from './Difficulty.module.scss';
import clsx from "clsx";

interface DifficultyI{
    isHorizontal?: boolean;
}

function Difficulty({isHorizontal}:DifficultyI) {
    return (
        <div className={clsx(cls.wrapper,{
            [cls.horizontal]: isHorizontal,
        })}>
            <div className={cls.opponent_difficulty_stage}></div>
            <div className={clsx(cls.opponent_difficulty_stage, cls.active)}></div>
            <div className={clsx(cls.opponent_difficulty_stage, cls.active)}></div>
        </div>
    );
}

export default Difficulty;
