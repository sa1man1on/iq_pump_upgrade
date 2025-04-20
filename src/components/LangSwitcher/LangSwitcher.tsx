import {useState} from 'react';
import cls from './LangSwitcher.module.scss';

function LangSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('English');

    const languages = ['English', 'Spanish', 'French', 'German'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (lang) => {
        setSelectedLang(lang);
        setIsOpen(false);
    };

    return (
        <div className={cls.wrapper}>
            <div className={cls.label}>language</div>
            <div
                className={cls.current_lang}
                onClick={toggleDropdown}
            >
                {selectedLang}
                <span className={cls.arrow}>{isOpen ? '▲' : '▼'}</span>
            </div>

            {isOpen && (
                <div className={cls.dropdown}>
                    {languages.map((lang) => (
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