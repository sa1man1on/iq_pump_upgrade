import cls from './Artefact.module.scss';
import clsx from "clsx";

function Artefact({isHeal,img, isShield, isNext, isActive}:any) {
    return (
        <div className={clsx(cls.wrapper,{
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
