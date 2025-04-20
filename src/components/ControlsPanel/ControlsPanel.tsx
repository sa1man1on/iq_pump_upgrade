import cls from './ControlsPanel.module.scss';
import Difficulty from "../Difficulty/Difficulty.tsx";
import ArtefactsGroup from "../ArtefactsGroup/ArtefactsGroup.tsx";

function ControlsPanel() {
    return (
        <div className={cls.wrapper}>
            <div className={cls.difficult_wrapper}>
                <Difficulty></Difficulty>
            </div>
            <ArtefactsGroup></ArtefactsGroup>
        </div>
    );
}

export default ControlsPanel;
