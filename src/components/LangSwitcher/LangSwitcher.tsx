import {useState} from 'react';
import cls from './LangSwitcher.module.scss';

// фиксируем набор поддерживаемых языков в виде union‑типа
type Language = 'English' | 'Русский';
const languages: Language[] = ['English', 'Русский'];

function LangSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState<Language>('English');

    const toggleDropdown = (): void => {
        setIsOpen(prev => !prev);
    };

    const selectLanguage = (lang: Language): void => {
        setSelectedLang(lang);
        setIsOpen(false);
    };

    return (
        <div className={cls.wrapper}>
            <div className={cls.label}>language</div>

            <div className={cls.current_lang} onClick={toggleDropdown}>
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
                            {lang}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LangSwitcher;
