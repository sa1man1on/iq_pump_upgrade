import {SetStateAction, useState} from 'react';
import clsx from 'clsx';
import cls from './Difficulty.module.scss';

interface DifficultyI {
    isHorizontal?: boolean;
}

function Difficulty({isHorizontal}: DifficultyI) {
    const [level, setLevel] = useState(2); // уровень от 1 до 3
    const [showAnimation, setShowAnimation] = useState(false);
    const [animatedWord, setAnimatedWord] = useState('Medium');

    const difficultyWords = {
        1: 'Easy',
        2: 'Medium',
        3: 'Hard'
    };

    const handleLevelChange = (newLevel: SetStateAction<number>) => {
        if (newLevel !== level) {
            setLevel(newLevel);
            // @ts-ignore
            setAnimatedWord(difficultyWords[newLevel]);
            setShowAnimation(true);

            setTimeout(() => {
                setShowAnimation(false);
            }, 1200);
        }
    };

    return (
        <>
            {showAnimation && (
                <div className={cls.animated_word_container}>
                    <div className={clsx(cls.animated_word, {
                        [cls.easy]: level === 1,
                        [cls.medium]: level === 2,
                        [cls.hard]: level === 3,
                    })}>
                        {animatedWord}
                    </div>
                </div>
            )}

            <div className={clsx(cls.wrapper, {
                [cls.horizontal]: isHorizontal,
            })}>
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className={clsx(cls.opponent_difficulty_stage, {
                            [cls.active]: i >= 3 - level,
                            [cls.easy_active]: level === 1 && i >= 3 - level,
                            [cls.medium_active]: level === 2 && i >= 3 - level,
                            [cls.hard_active]: level === 3 && i >= 3 - level,
                        })}
                        onClick={() => handleLevelChange(3 - i)}
                    />
                ))}
            </div>
        </>
    );
}

export default Difficulty;