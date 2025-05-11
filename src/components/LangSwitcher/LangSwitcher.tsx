import {useState} from 'react';
import cls from './LangSwitcher.module.scss';

// фиксируем набор поддерживаемых языков в виде union‑типа
export type Language = 'RU' | 'EN';
const languages: Language[] = ['RU', 'EN'];

// отображаемые названия языков
const languageNames: Record<Language, string> = {
    RU: 'Русский',
    EN: 'English',
};

export default function LangSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState<Language>('EN');

    const toggleDropdown = (): void => {
        setIsOpen(prev => !prev);
    };

    const selectLanguage = (lang: Language): void => {
        setSelectedLang(lang);
        setIsOpen(false);
    };

    return (
        <div className={cls.wrapper}>
            <div className={cls.current_lang} onClick={toggleDropdown}>
                {/* Отображаем короткий код языка */}
                {selectedLang}
                <span className={cls.arrow}>{isOpen ? '▲' : '▼'}</span>
            </div>

            {isOpen && (
                <div className={cls.dropdown}>
                    {languages.map(lang => (
                        <div
                            key={lang}
                            className={cls.language_item}
                            onClick={() => selectLanguage(lang)}
                        >
                            {/* Отображаем полное название языка */}
                            {languageNames[lang]}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
