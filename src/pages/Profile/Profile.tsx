import cls from "./Profile.module.scss";
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import InfoPanel from "../../components/InfoPanel/InfoPanel.tsx";
import CharacterSlider from "../../components/CharacterSlider/CharacterSlider.tsx";
import ControlsPanel from "../../components/ControlsPanel/ControlsPanel.tsx";
import TaskAdderGroup from "../../components/TaskAdderGroup/TaskAdderGroup.tsx";


function Profile() {

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isProfile={true}></GameLayout>
                <div className={cls.wrapper}>
                    <InfoPanel></InfoPanel>

                    <CharacterSlider></CharacterSlider>

                    <ControlsPanel ></ControlsPanel>

                    <TaskAdderGroup></TaskAdderGroup>
                </div>
            </div>
        </div>
    );
}

export default Profile;
