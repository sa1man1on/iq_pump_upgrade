import cls from './AnswerArea.module.scss';
import clsx from "clsx";
import {useState} from "react";

interface AnswerAreaI {
    placeholder: string;
    isCorrect?: boolean;
}

function AnswerArea({placeholder, isCorrect}: AnswerAreaI) {
    const [value, setValue] = useState('');
    const [limitReached, setLimitReached] = useState(false);

    const handleChange = (e: { target: { value: any; }; }) => {
        const newValue = e.target.value;

        if (newValue.length <= 30) {
            setValue(newValue);
            setLimitReached(newValue.length === 30);
        }
    };
    return (
        <div className={cls.answer_area}>
          <textarea
              className={clsx(cls.input, cls.answer_area, {[cls.correct]: isCorrect})}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              maxLength={30}
          />
            {limitReached && (
                <div className={cls.limitWarning}>
                    Достигнут лимит в 30 символов
                </div>
            )}
        </div>
    );
}

export default AnswerArea;
