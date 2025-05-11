import {CSSProperties, ReactNode} from 'react';
import clsx from 'clsx';
import cls from './GlowWrapper.module.scss';

interface GlowWrapperProps {
    children: ReactNode;
    /** На сколько px «растянуть» сияние за границы контента. По умолчанию 16 px */
    glowPadding?: number;
    className?: string;
}

/**
 * Универсальная аура‑обёртка.
 * Подходит для любых компонентов: кнопок, изображений, карточек и т.д.
 */
function GlowWrapper({
                         children,
                         glowPadding = 16,
                         className,
                     }: GlowWrapperProps) {
    const style = {
        '--glow-padding': `${glowPadding}px`,
    } as CSSProperties;

    return (
        <div className={clsx(cls.wrapper, className)} style={style}>
            {/* слои свечения */}
            <div className={cls.shadow1}/>
            <div className={cls.shadow2}/>
            <div className={cls.shadow3}/>
            <div className={cls.shadow4}/>
            <div className={cls.shadow5}/>

            {/* контент */}
            <div className={cls.content}>{children}</div>
        </div>
    );
}

export default GlowWrapper;
