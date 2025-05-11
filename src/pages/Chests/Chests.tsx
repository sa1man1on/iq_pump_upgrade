import cls from "./Chests.module.scss";
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import chest_video from '../../assets/chest.webm'
import clsx from "clsx";

function Chests() {

    // Функция для запуска видео
    const handlePlay = (event: React.MouseEvent<HTMLVideoElement>) => {
        const video = event.currentTarget;
        video.play();
    };

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isProfile={true} isTotalAnswersSum={true}></GameLayout>
                <div className={cls.wrapper}>
                    <div className={cls.chests_container}>
                        <video
                            src={chest_video}
                            className={clsx(cls.chest_1, cls.chest)}
                            onClick={handlePlay}
                        ></video>
                        <video
                            src={chest_video}
                            className={clsx(cls.chest_2, cls.chest)}
                            onClick={handlePlay}
                        ></video>
                        <video
                            src={chest_video}
                            className={clsx(cls.chest_3, cls.chest)}
                            onClick={handlePlay}
                        ></video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chests;
