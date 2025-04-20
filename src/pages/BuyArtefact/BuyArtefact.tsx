import cls from './BuyArtefact.module.scss';
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import CancelButton from "../../components/buttons/CancelButton/CancelButton.tsx";
import artefact_image from '../../assets/icon_shield_ability.svg'
import {useNavigate} from "react-router-dom";
import Button from "../../components/buttons/Button/Button.tsx";

function BuyArtefact() {
    const navigate = useNavigate();
    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isTournamentCreation={true}/>

                <div className={cls.artefact}>
                    <img className={cls.artefact_image}
                         src={artefact_image}
                         alt=""/>
                    <div className={cls.artefact_name}>
                        SHIELD
                    </div>

                </div>

                <div className={cls.description}>
                    Защищает от неудачно
                    выбора при игре
                    <br/>
                    «Три ларца»
                </div>
                <div className={cls.price}>500</div>
                <div className={cls.button_action_wrapper}>
                    <Button>Купить</Button>
                </div>
                <CancelButton
                    onClick={() => navigate('/profile')}
                >назад</CancelButton>
            </div>
        </div>
    );
}

export default BuyArtefact;
