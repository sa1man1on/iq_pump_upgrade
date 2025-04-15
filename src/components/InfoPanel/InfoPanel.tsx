import cls from './InfoPanel.module.scss'
import LevelInfo from "../LevelInfo/LevelInfo.tsx";
import LangSwitcher from "../LangSwitcher/LangSwitcher.tsx";

function InfoPanel() {
    return (
        <div className={cls.wrapper}>
            <div className={cls.switcher}>
                <LangSwitcher></LangSwitcher>
            </div>

            <div className={cls.info}>
                <LevelInfo></LevelInfo>
            </div>

        </div>
    );
}

export default InfoPanel;