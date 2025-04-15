import cls from './HeadImage.module.scss';
import head_placeholder from "../../assets/head_placeholder.png";
import clsx from "clsx";

interface HeadImageI{
    isRight?: boolean;
}

function HeadImage({isRight}:HeadImageI) {
    return (
        <div className={cls.head_image_wrapper}>
            <img
                className={clsx(
                    cls.head_img,
                    {[cls.right]: isRight,})}
                src={head_placeholder} alt=""/>
        </div>
    );
}

export default HeadImage;
