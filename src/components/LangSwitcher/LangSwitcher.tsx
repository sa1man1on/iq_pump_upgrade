import cls from './LangSwitcher.module.scss';

function LangSwitcher() {
    return (
        <div className={cls.wrapper}>
            <div className={cls.label}>language</div>
            <div className={cls.current_lang}>English</div>
        </div>
    );
}

export default LangSwitcher;
