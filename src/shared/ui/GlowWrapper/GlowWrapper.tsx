import cls from './GlowWrapper.module.scss';

function GlowWrapper() {
    return (
        <div className={cls.button_container}>
            <div className={cls.button_shadow_1}></div>
            <div className={cls.button_shadow_2}></div>
            <div className={cls.button_shadow_3}></div>
            <div className={cls.button_shadow_4}></div>
            <div className={cls.button_shadow_5}></div>

            <div className={cls.button_bg}></div>
            {}
        </div>
    );
}

export default GlowWrapper;
