import cls from './CharacterSlider.module.scss';
import {useState} from "react";
import character1 from '../../assets/characters_in_slider/slider_placeholder_1.png'
import character2 from '../../assets/characters_in_slider/slider_placeholder_2.png'
import character3 from '../../assets/characters_in_slider/slider_placeholder_3.png'


import slider_arrow from '../../assets/slider_arrow.svg'
import clsx from "clsx";

const images = [
    character1,
    character2,
    character3,
]


function CharacterSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const goNext = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className={cls.wrapper}>
            <button
                className={clsx(cls.prev, cls.button)}
                onClick={goPrev}
            >
                <img className={clsx(cls.arrow_left, cls.arrow)}  src={slider_arrow} alt=""/>
            </button>
            <img
                className={cls.image}
                src={images[currentIndex]}
                alt="Slide"
            />
            <button
                className={clsx(cls.next, cls.button)}
                onClick={goNext}
            >
                <img className={clsx(cls.arrow_right, cls.arrow)} src={slider_arrow} alt=""/>
            </button>
        </div>
    );
};

export default CharacterSlider;
