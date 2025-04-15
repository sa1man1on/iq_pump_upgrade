import cls from './GettingNewCharacter.module.scss'
import new_character_image from '../../assets/new_character_placeholder.png'
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";


function GettingNewCharacter() {
    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout></GameLayout>
                <div className={cls.getting_new_character_wrapper}>
                    <div className={cls.coefficient}>
                        <div className={cls.coefficient_number}>X1,5</div>
                        <div className={cls.coefficient_description}>Коэффициент <br/> увеличения </div>
                    </div>
                    <div className={cls.congratulation}>
                        Поздравляем!
                        <br/>
                        Вы достигли нового
                        <br/>
                        уровня интеллекта
                    </div>
                    <div className={cls.name}>Shukracharuya</div>
                    <img className={cls.new_character} src={new_character_image} alt=""/>
                </div>
            </div>
        </div>

    );
}

export default GettingNewCharacter;