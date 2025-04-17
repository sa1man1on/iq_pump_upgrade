import cls from "./Chests.module.scss";
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import chest_1 from '../../assets/chest_1.png'
import chest_2 from '../../assets/chest_2.png'
import chest_3 from '../../assets/chest_3.png'
import clsx from "clsx";

function Chests() {

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isTotalAnswersSum={true}></GameLayout>
                <div className={cls.wrapper}>
                    <div className={cls.chests_container}>
                        <img alt='' src={chest_1} className={clsx(cls.chest_1, cls.chest)}></img>
                        <img alt='' src={chest_2} className={clsx(cls.chest_2, cls.chest)}></img>
                        <img alt='' src={chest_3} className={clsx(cls.chest_3, cls.chest)}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chests;
