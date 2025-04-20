import {useState} from 'react';
import clsx from 'clsx';
import cls from './Difficulty.module.scss';

interface DifficultyI {
    isHorizontal?: boolean;
}

function Difficulty({isHorizontal}: DifficultyI) {
    const [level, setLevel] = useState(2); // уровень от 1 до 3

    return (
        <div className={clsx(cls.wrapper, {
            [cls.horizontal]: isHorizontal,
        })}>
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className={clsx(cls.opponent_difficulty_stage, {
                        [cls.active]: i >= 3 - level,
                    })}
                    onClick={() => setLevel(3 - i)}
                />
            ))}
        </div>
    );
}


export default Difficulty;