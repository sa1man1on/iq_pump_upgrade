import cls from './ArtefactsGroup.module.scss';
import Artefact from "../Artefact/Artefact.tsx";
import icon_heal_ability from '../../assets/icon_heal_ability.svg'
import icon_shield_ability from '../../assets/icon_shield_ability.svg'
import icon_next_ability from '../../assets/icon_next_ability.svg'

function ArtefactsGroup() {
    return (
        <div className={cls.wrapper}>
            <Artefact artefact_router_path='buy_artefact_heal' isHeal={true} img={icon_heal_ability}></Artefact>
            <Artefact artefact_router_path='buy_artefact_shield' isActive={true} isShield={true}
                      img={icon_shield_ability}></Artefact>
            <Artefact artefact_router_path='buy_artefact_next' isNext={true} img={icon_next_ability}></Artefact>
        </div>
    );
}

export default ArtefactsGroup;
