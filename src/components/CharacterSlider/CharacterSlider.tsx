import cls from './CharacterSlider.module.scss';
import {useRef, useState} from 'react';
import clsx from 'clsx';

import character1 from '../../assets/characters_in_slider/slider_placeholder_1.png';
import character2 from '../../assets/characters_in_slider/slider_placeholder_2.png';
import character3 from '../../assets/characters_in_slider/slider_placeholder_3.png';
import slider_arrow from '../../assets/slider_arrow.svg';

const images = [character1, character2, character3];
const SWIPE_THRESHOLD = 50;

function CharacterSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragX, setDragX] = useState(0);                  // текущее смещение картинки
    const [isAnimating, setIsAnimating] = useState(false);  // для анимации плавного отката
    const startX = useRef(null);

    const goPrev = () =>
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));

    const goNext = () =>
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

    const handleTouchStart = e => {
        startX.current = e.touches[0].clientX;
        setIsAnimating(false); // отключаем плавность на старте свайпа
    };

    const handleTouchMove = e => {
        if (startX.current === null) return;
        const currentX = e.touches[0].clientX;
        setDragX(currentX - startX.current); // сдвигаем картинку за пальцем
    };

    const handleTouchEnd = () => {
        if (startX.current === null) return;

        if (Math.abs(dragX) > SWIPE_THRESHOLD) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            dragX < 0 ? goNext() : goPrev();
        }

        // возвращаем на 0 с плавной анимацией
        setDragX(0);
        setIsAnimating(true);
        startX.current = null;
    };

    return (
        <div
            className={cls.wrapper}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <button className={clsx(cls.prev, cls.button)} onClick={goPrev}>
                <img className={clsx(cls.arrow_left, cls.arrow)} src={slider_arrow} alt=""/>
            </button>

            <img
                className={cls.image}
                src={images[currentIndex]}
                alt="Slide"
                style={{
                    transform: `translateX(${dragX}px)`,
                    transition: isAnimating ? 'transform 0.3s ease' : 'none',
                }}
            />

            <button className={clsx(cls.next, cls.button)} onClick={goNext}>
                <img className={clsx(cls.arrow_right, cls.arrow)} src={slider_arrow} alt=""/>
            </button>
        </div>
    );
}

export default CharacterSlider;
