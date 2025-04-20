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
    const [dragX, setDragX] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // ref хранит либо число, либо null
    const startX = useRef<number | null>(null);

    const goPrev = () =>
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));

    const goNext = () =>
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

    /** Пользователь начал свайп */
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
        startX.current = e.touches[0].clientX;
        setIsAnimating(false);
    };

    /** Палец двигается */
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
        if (startX.current === null) return;
        const currentX = e.touches[0].clientX;
        setDragX(currentX - startX.current);
    };

    /** Свайп завершён */
    const handleTouchEnd = (): void => {
        if (startX.current === null) return;

        if (Math.abs(dragX) > SWIPE_THRESHOLD) {
            dragX < 0 ? goNext() : goPrev();
        }

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
