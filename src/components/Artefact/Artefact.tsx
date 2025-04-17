import cls from './Artefact.module.scss';
import clsx from "clsx";
import {useNavigate} from "react-router-dom";

interface ArtefactI {
    isHeal?: boolean;
    img: string;
    isShield?: boolean;
    isNext?: boolean;
    isActive?: boolean;
    artefact_router_path: string;
}

function Artefact({isHeal, img, isShield, isNext, isActive, artefact_router_path}: ArtefactI) {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/${artefact_router_path}`)}
            className={clsx(cls.wrapper, {
                [cls.active]: isActive
            })}>
            <img
                src={img}
                className={clsx({
                    [cls.heal]: isHeal,
                    [cls.shield]: isShield,
                    [cls.next]: isNext,
                })}
                alt=""
            />
        </div>
    );
}

export default Artefact;
