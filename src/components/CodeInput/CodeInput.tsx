import { useState } from 'react';
import cls from './CodeInput.module.scss';

export default function CodeInput() {
    const [code, setCode] = useState('');

    const handleChange = (e:any) => {
        // Разрешаем только цифры и максимум 6 символов
        const value = e.target.value.replace(/\D/g, '').slice(0, 6);
        setCode(value);
    };

    return (
        <input
            className={cls.codeInput}
            type="text"
            value={code}
            onChange={handleChange}
            placeholder=""
        />
    );
}