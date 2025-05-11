import cls from "./Profile.module.scss";
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import InfoPanel from "../../components/InfoPanel/InfoPanel.tsx";
import CharacterSlider from "../../components/CharacterSlider/CharacterSlider.tsx";
import ControlsPanel from "../../components/ControlsPanel/ControlsPanel.tsx";
import TaskAdderGroup from "../../components/TaskAdderGroup/TaskAdderGroup.tsx";
import {useState} from "react";
import SimpleModal from "../../components/SimpleModal/SimpleModal.tsx";


function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isTotalAnswersSum={true} isProfile={true}></GameLayout>
                <div className={cls.wrapper}>
                    <InfoPanel></InfoPanel>

                    <CharacterSlider></CharacterSlider>

                    <ControlsPanel></ControlsPanel>

                    <TaskAdderGroup onOpenModal={openModal}></TaskAdderGroup>
                    <SimpleModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        title="Изъявляете желание выйти?"
                        content="Сделайте же это опустив палец на кнопку ОК`ей."
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
